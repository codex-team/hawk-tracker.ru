<template>
  <div ref="integrations" class="integrations" :class="{ 'integrations--visible': isVisible }">
    <div class="integrations__row">
      <div
        v-for="n in lineLength"
        :key="n"
        class="integrations__item"
      />
    </div>

    <!-- First line -->
    <div class="integrations__row">
      <template v-if="Math.floor((lineLength - firstLine.length) / 2) > 0">
        <div
          v-for="n in Math.floor((lineLength - firstLine.length) / 2)"
          :key="`first-line-before-${n}`"
          class="integrations__item"
        />
      </template>
      <div
        v-for="(integration, index) in firstLine"
        :key="integration.name"
        class="integrations__item"
        :style="{
          '--glow-color': integration.glowColor,
          '--animation-delay': `${index * 0.1}s`,
        }"
      >
        <img :src="integration.picture" :alt="integration.name">
      </div>
      <template v-if="Math.ceil((lineLength - firstLine.length) / 2) + 1 > 0">
        <div
          v-for="n in Math.ceil((lineLength - firstLine.length) / 2) + 1"
          :key="`first-line-after-${n}`"
          class="integrations__item"
        />
      </template>
    </div>

    <!-- Second line -->
    <div class="integrations__row">
      <template v-if="Math.ceil((lineLength - secondLine.length) / 2) > 0">
        <div
          v-for="n in Math.ceil((lineLength - secondLine.length) / 2)"
          :key="`second-line-before-${n}`"
          class="integrations__item"
        />
      </template>
      <div
        v-for="(integration, index) in secondLine"
        :key="integration.name"
        class="integrations__item"
        :style="{
          '--glow-color': integration.glowColor,
          '--animation-delay': `${(index + 5) * 0.1}s`,
        }"
      >
        <img :src="integration.picture" :alt="integration.name">
      </div>
      <template v-if="Math.floor((lineLength - secondLine.length) / 2) + 1 > 0">
        <div
          v-for="n in Math.ceil((lineLength - secondLine.length) / 2) + 1"
          :key="`second-line-after-${n}`"
          class="integrations__item"
        />
      </template>
    </div>

    <!-- Third line -->
    <div class="integrations__row">
      <template v-if="Math.floor((lineLength - thirdLine.length) / 2) > 0">
        <div
          v-for="n in Math.floor((lineLength - thirdLine.length) / 2)"
          :key="`third-line-before-${n}`"
          class="integrations__item"
        />
      </template>
      <div
        v-for="(integration, index) in thirdLine"
        :key="integration.name"
        class="integrations__item"
        :style="{
          '--glow-color': integration.glowColor,
          '--animation-delay': `${(index + 13) * 0.1}s`,
        }"
      >
        <img :src="integration.picture" :alt="integration.name">
      </div>
      <template v-if="Math.floor((lineLength - thirdLine.length) / 2) + 1 > 0">
        <div
          v-for="n in Math.ceil((lineLength - thirdLine.length) / 2) + 1"
          :key="`third-line-after-${n}`"
          class="integrations__item"
        />
      </template>
    </div>

    <div class="integrations__row">
      <div
        v-for="n in lineLength"
        :key="n"
        class="integrations__item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

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

export default Vue.extend({
  data() {
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
      isVisible: false,
      observer: null as IntersectionObserver | null,
      mobileBreakpoint: 850,
    };
  },
  computed: {
    lineLength() {
      const itemWidth = 80;
      const itemsGap = 20;
      const lineWidth = this.windowWidth - 2 * 20;

      return Math.ceil(lineWidth / (itemWidth + itemsGap));
    },
    isMobile() {
      return this.windowWidth < this.mobileBreakpoint;
    },
    firstLine() {
      return this.integrations.slice(0, 5);
    },
    secondLine() {
      return this.integrations.slice(5, 13);
    },
    thirdLine() {
      return this.integrations.slice(13);
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;

    window.addEventListener('resize', this.handleResize);

    // Set up intersection observer for animation trigger
    this.setupIntersectionObserver();
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);

    if (this.observer) {
      this.observer.disconnect();
    }
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },

    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisible = true;
              if (this.observer) {
                this.observer.disconnect();
              }
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      const element = this.$refs.integrations as HTMLElement;

      if (element) {
        this.observer.observe(element);
      }
    },
  },
});
</script>

<style lang="postcss">
@import url('@/assets/styles/variables.pcss');

.integrations {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  background-color: #060606;
  width: 100%;
  overflow: hidden;
  position: relative;

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
    gap: 20px;

    &:nth-of-type(2n+1) {
      margin-left: -50px;
    }
  }

  &__item {
    width: 80px;
    height: 80px;

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
      transition: box-shadow 0.15s ease-in;
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
