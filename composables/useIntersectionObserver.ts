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

// Shared observer instance
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
            if (entry.isIntersecting) {
              observerEntry.isVisible = true;
              observerEntry.callbacks.onVisible();

              // Disconnect if once is true
              if (observerEntry.options.once) {
                sharedObserver?.unobserve(entry.target);
                observerEntries.delete(entry.target as HTMLElement);
              }
            } else if (!observerEntry.options.once && observerEntry.callbacks.onHidden) {
              observerEntry.isVisible = false;
              observerEntry.callbacks.onHidden();
            }
          }
        });
      },
      {
        threshold: 0.1, // Default threshold, will be overridden by individual options
        rootMargin: '0px 0px -50px 0px', // Default rootMargin
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
    threshold = 0.3,
    rootMargin = '0px 0px -50px 0px',
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
