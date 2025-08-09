<template>
  <div ref="elementRef" class="integrations" :class="{ 'integrations--visible': isVisible }">
    <div class="integrations__row">
      <div
        v-for="n in totalItemsPerLine"
        :key="n"
        class="integrations__item"
      />
    </div>

    <!-- Dynamic lines -->
    <div
      v-for="(line, lineIndex) in lines"
      :key="`line-${lineIndex}`"
      class="integrations__row"
    >
      <div
        v-for="n in Math.max(1, Math.floor((totalItemsPerLine - line.length) / 2))"
        :key="`line-${lineIndex}-before-${n}`"
        class="integrations__item"
      />
      <div
        v-for="(integration, index) in line"
        :key="integration.name"
        class="integrations__item"
        :style="{
          '--glow-color': integration.glowColor,
          '--animation-delay': `${(lineIndex * maxItemsPerLine + index) * 0.1}s`,
        }"
      >
        <img :src="integration.picture" :alt="integration.name">
      </div>

      <div
        v-for="n in Math.max(1, Math.ceil((totalItemsPerLine - line.length) / 2) + 1)"
        :key="`line-${lineIndex}-after-${n}`"
        class="integrations__item"
      />
    </div>

    <div class="integrations__row">
      <div
        v-for="n in totalItemsPerLine"
        :key="n"
        class="integrations__item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useIntersectionObserver } from '~/composables/useIntersectionObserver';

/* Import SVG assets */
import nodejsSvg from '~/assets/svg/integrations/nodejs.svg';
import javascriptSvg from '~/assets/svg/integrations/javascript.svg';
import reactSvg from '~/assets/svg/integrations/react.svg';
import vueSvg from '~/assets/svg/integrations/vue.svg';
import nuxtSvg from '~/assets/svg/integrations/nuxt.svg';
import goSvg from '~/assets/svg/integrations/go.svg';
import phpSvg from '~/assets/svg/integrations/php.svg';
import symfonySvg from '~/assets/svg/integrations/symfony.svg';
import laravelSvg from '~/assets/svg/integrations/laravel.svg';
import pythonSvg from '~/assets/svg/integrations/python.svg';
import flaskSvg from '~/assets/svg/integrations/flask.svg';
import fastapiSvg from '~/assets/svg/integrations/fastapi.svg';
import djangoSvg from '~/assets/svg/integrations/django.svg';
import kotlinSvg from '~/assets/svg/integrations/kotlin.svg';
import javaSvg from '~/assets/svg/integrations/java.svg';
import webpackSvg from '~/assets/svg/integrations/webpack.svg';
import viteSvg from '~/assets/svg/integrations/vite.svg';
import sentrySvg from '~/assets/svg/integrations/sentry.svg';

interface Integration {
  name: string;
  picture: string;
  link: string;
  glowColor: string;
}

type Data = {
  integrations: Integration[];
  windowWidth: number;
  mobileBreakpoint: number;
  containerPadding: number;
};

export default Vue.extend({

  setup() {
    const { isVisible, elementRef } = useIntersectionObserver({
      threshold: 0.1,
    });

    return {
      isVisible,
      elementRef,
    };
  },
  data: function (): Data {
    return {
      integrations: [
        {
          name: 'NodeJs',
          picture: nodejsSvg,
          link: 'https://github.com/codex-team/hawk.nodejs',
          glowColor: '#00FF00',
        },
        {
          name: 'JavaScript and TypeScript',
          picture: javascriptSvg,
          link: 'https://github.com/codex-team/hawk.javascript',
          glowColor: '#FFE300',
        },
        {
          name: 'React',
          picture: reactSvg,
          link: 'https://github.com/codex-team/hawk.javascript?tab=readme-ov-file#usage-in-react-project',
          glowColor: '#00C8FF',
        },
        {
          name: 'Vue',
          picture: vueSvg,
          link: 'https://github.com/codex-team/hawk.javascript?tab=readme-ov-file#integrate-to-vue-application',
          glowColor: '#00FFBF',
        },
        {
          name: 'Nuxt',
          picture: nuxtSvg,
          link: 'https://github.com/codex-team/hawk.nuxt',
          glowColor: '#00FF77',
        },
        {
          name: 'Go',
          picture: goSvg,
          link: 'https://github.com/codex-team/hawk.go',
          glowColor: '#00CBFF',
        },
        {
          name: 'PHP',
          picture: phpSvg,
          link: 'https://github.com/codex-team/hawk.php',
          glowColor: '#9659FF',
        },
        {
          name: 'Symfony',
          picture: symfonySvg,
          link: 'https://github.com/codex-team/hawk.symfony',
          glowColor: '#13BA6C',
        },
        {
          name: 'Laravel',
          picture: laravelSvg,
          link: 'https://github.com/codex-team/hawk.laravel',
          glowColor: '#FF5733',
        },
        {
          name: 'Python',
          picture: pythonSvg,
          link: 'https://github.com/codex-team/hawk.python',
          glowColor: '#418AFF',
        },
        {
          name: 'Flask',
          picture: flaskSvg,
          link: 'https://github.com/codex-team/hawk.python/blob/master/docs/flask.md',
          glowColor: '#3CC4FF',
        },
        {
          name: 'FastAPI',
          picture: fastapiSvg,
          link: 'https://github.com/codex-team/hawk.python/blob/master/docs/fastapi.md',
          glowColor: '#3CFFCB',
        },
        {
          name: 'Django',
          picture: djangoSvg,
          link: 'https://github.com/codex-team/hawk.python',
          glowColor: '#13C52B',
        },
        {
          name: 'Kotlin',
          picture: kotlinSvg,
          link: 'https://github.com/codex-team/hawk.kotlin',
          glowColor: '#954FFF',
        },
        {
          name: 'Java',
          picture: javaSvg,
          link: 'https://github.com/codex-team/hawk.java',
          glowColor: '#878FFF',
        },
        {
          name: 'Webpack',
          picture: webpackSvg,
          link: 'https://github.com/codex-team/hawk.webpack.plugin',
          glowColor: '#7AC8FF',
        },
        {
          name: 'Vite',
          picture: viteSvg,
          link: 'https://github.com/codex-team/hawk.vite.plugin',
          glowColor: '#FF6EEC',
        },
        {
          name: 'Sentry',
          picture: sentrySvg,
          link: 'https://codex.so/sentry-migration',
          glowColor: '#6A3CFF',
        },
      ],
      windowWidth: 1280,
      mobileBreakpoint: 850,
      containerPadding: 2 * 20,
    };
  },
  computed: {

    /**
     * Integration item square size. Different for mobile and desktop.
     */
    itemsSize: function (): number {
      return this.windowWidth < this.mobileBreakpoint ? 60 : 80;
    },

    /**
     * Integration item gap. Different for mobile and desktop.
     */
    itemsGap: function (): number {
      return this.windowWidth < this.mobileBreakpoint ? 10 : 20;
    },

    /**
     * Maximum number of items per line
     * Used for the first and last empty lines
     */
    totalItemsPerLine: function (): number {
      return Math.ceil(this.windowWidth / (this.itemsSize + this.itemsGap));
    },

    /**
     * How many non-empty items should be in the line
     * Based on the screen width
     */
    maxItemsPerLine: function (): number {
      // Use 30% of screen width on desktop, 100% on mobile
      const isMobile = this.windowWidth < this.mobileBreakpoint;
      const maxWidth = isMobile ? this.windowWidth * 0.8 : this.windowWidth * 0.3;

      return Math.ceil(maxWidth / (this.itemsSize + this.itemsGap));
    },

    /**
     * Whether the screen is mobile
     */
    isMobile: function (): boolean {
      return this.windowWidth < this.mobileBreakpoint;
    },

    /**
     * How many lines should be in the component
     * Based on the max items per line
     */
    totalLines: function (): number {
      // Calculate how many lines we need based on total items and items per line
      const totalItems = this.integrations.length;
      const maxItemsPerLine = this.maxItemsPerLine;

      return Math.ceil(totalItems / maxItemsPerLine);
    },

    /**
     * Separation by lines
     */
    lines: function (): Integration[][] {
      const totalItems = this.integrations.length;
      const targetItemsPerLine = this.maxItemsPerLine;
      const lines = [];

      if (this.isMobile) {
        // On mobile, use normal distribution
        const totalLines = Math.ceil(totalItems / targetItemsPerLine);
        const baseItemsPerLine = Math.floor(totalItems / totalLines);
        const remainder = totalItems % totalLines;

        for (let i = 0; i < totalLines; i++) {
          const startIndex = i * baseItemsPerLine + Math.min(i, remainder);
          const endIndex = startIndex + baseItemsPerLine + (i < remainder ? 1 : 0);

          lines.push(this.integrations.slice(startIndex, endIndex));
        }
      } else {
        // On desktop, make first and last lines have -1 item, center lines have +2 items
        const totalLines = Math.ceil(totalItems / targetItemsPerLine);

        if (totalLines <= 2) {
          // If only 1-2 lines, use normal distribution
          const baseItemsPerLine = Math.floor(totalItems / totalLines);
          const remainder = totalItems % totalLines;

          for (let i = 0; i < totalLines; i++) {
            const startIndex = i * baseItemsPerLine + Math.min(i, remainder);
            const endIndex = startIndex + baseItemsPerLine + (i < remainder ? 1 : 0);

            lines.push(this.integrations.slice(startIndex, endIndex));
          }
        } else {
          // For 3+ lines, redistribute items
          const itemsPerLine = Math.floor(totalItems / totalLines);
          const remainder = totalItems % totalLines;
          let currentIndex = 0;

          for (let i = 0; i < totalLines; i++) {
            let itemsInThisLine;

            if (i === 0 || i === totalLines - 1) {
              // First and last lines get -1 item
              itemsInThisLine = Math.max(1, itemsPerLine - 1);
            } else {
              // Center lines get +2 items (if available)
              itemsInThisLine = itemsPerLine + 2;
            }

            // Adjust for remainder
            if (i < remainder) {
              itemsInThisLine += 1;
            }

            const endIndex = Math.min(currentIndex + itemsInThisLine, totalItems);

            lines.push(this.integrations.slice(currentIndex, endIndex));
            currentIndex = endIndex;
          }
        }
      }

      return lines;
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize: function (): void {
      this.windowWidth = window.innerWidth;
    },

    calculateItemsPerLine: function (): number {
      const itemWidth = 80;
      const itemsGap = 20;
      const containerPadding = 2 * 20;

      // Use 60% of screen width on desktop, 100% on mobile
      const isMobile = this.windowWidth < this.mobileBreakpoint;
      const maxWidth = isMobile ? this.windowWidth - containerPadding : this.windowWidth * 0.6;

      return Math.ceil(maxWidth / (itemWidth + itemsGap));
    },
  },
});
</script>

<style lang="postcss">
@import url('@/assets/styles/variables.pcss');

.integrations {

  --items-size: 80px;
  --items-gap: 20px;

  @media (--screen-mobile) {
    --items-size: 60px;
    --items-gap: 10px;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--items-gap);
  background-color: #060606;
  width: 100%;
  overflow: hidden;
  position: relative;
  color:red;

  mask-image: linear-gradient(90deg,transparent 0%,#ffffff 300px,#ffffff calc(100vw - 300px),transparent 100%);

  @media (--screen-mobile) {
    mask-image: none;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 140px;
    z-index: 1;
  }

  &::before {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    top: -40px;
  }

  &::after {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: -40px;
  }

  &__row {
    display: flex;
    flex-direction: row;
    gap: var(--items-gap);

    &:nth-of-type(2n+1) {
      margin-left: calc(var(--items-size) / 2 * -1 - var(--items-gap) / 2);
    }
  }

  &__item {
    width: var(--items-size);
    height: var(--items-size);

    background: #0A0A0A;
    border: 1px solid #1C1C1C;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    will-change: box-shadow;
    position: relative;
    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;
    animation-delay: var(--animation-delay, 0s);
    animation-play-state: paused;

    &:not(:empty)::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(circle at center, var(--glow-color, #ffffff41), transparent 70%);
      opacity: 0.13;
    }

    &:hover {
      box-shadow: 0 0 35px -9px var(--glow-color, #ffffff41);
      transition: box-shadow 0.05s ease-in;
    }

    &:not(:hover) {
      transition: box-shadow 2.5s ease;
    }
  }

  &--visible &__item {
    animation-play-state: running;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
