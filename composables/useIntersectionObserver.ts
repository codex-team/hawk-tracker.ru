import { ref, onMounted, onBeforeUnmount } from 'vue';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

interface ObserverEntry {
  element: HTMLElement;
  isVisible: boolean;
  options: UseIntersectionObserverOptions;
  callbacks: {
    onVisible: () => void;
    onHidden?: () => void;
  };
}

/**
 * We store the observer instance in a shared variable to avoid creating a new instance for each element.
 * And then reuse it for each element.
 */
let sharedObserver: IntersectionObserver | null = null;
const observerEntries = new Map<HTMLElement, ObserverEntry>();

/**
 * Creates or reuses a shared IntersectionObserver instance
 */
function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const observerEntry = observerEntries.get(entry.target as HTMLElement);

          if (observerEntry) {
            // Calculate intersection ratio based on element's own threshold
            const intersectionRatio = entry.intersectionRatio;
            const threshold = observerEntry.options.threshold || 0.3;
            const isIntersecting = intersectionRatio >= threshold;

            if (isIntersecting && !observerEntry.isVisible) {
              observerEntry.isVisible = true;
              observerEntry.callbacks.onVisible();

              // Disconnect if once is true
              if (observerEntry.options.once) {
                sharedObserver?.unobserve(entry.target);
                observerEntries.delete(entry.target as HTMLElement);
              }
            } else if (!isIntersecting && !observerEntry.options.once && observerEntry.callbacks.onHidden) {
              observerEntry.isVisible = false;
              observerEntry.callbacks.onHidden();
            }
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Multiple thresholds for smooth detection
        rootMargin: '0px 0px -80px 0px', // Increased bottom margin for earlier detection
      }
    );
  }

  return sharedObserver;
}

/**
 * Composable for intersection observer functionality
 * Uses a shared observer instance for better performance
 *
 * @param options
 */
export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const {
    threshold = 0.5, // Higher threshold - element must be 50% visible
    rootMargin = '0px 0px -60px 0px', // More padding from bottom
    once = true,
  } = options;

  const isVisible = ref(false);
  const elementRef = ref<HTMLElement | null>(null);

  const setupObserver = () => {
    if (process.client && elementRef.value) {
      const observer = getSharedObserver();

      // Create observer entry
      const entry: ObserverEntry = {
        element: elementRef.value,
        isVisible: false,
        options: {
          threshold,
          rootMargin,
          once,
        },
        callbacks: {
          onVisible: () => {
            isVisible.value = true;
          },
          onHidden: once
            ? undefined
            : () => {
              isVisible.value = false;
            },
        },
      };

      observerEntries.set(elementRef.value, entry);
      observer.observe(elementRef.value);
    }
  };

  const disconnect = () => {
    if (elementRef.value && sharedObserver) {
      sharedObserver.unobserve(elementRef.value);
      observerEntries.delete(elementRef.value);
    }
  };

  onMounted(() => {
    setupObserver();
  });

  onBeforeUnmount(() => {
    disconnect();
  });

  return {
    isVisible,
    elementRef,
  };
}
