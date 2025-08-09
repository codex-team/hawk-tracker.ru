<template>
  <div class="landing">
    <div class="landing__head">
      <div class="landing__head-content">
        <h1 class="landing__head-title">
          Мониторинг ошибок в ПО
        </h1>
        <div class="landing__head-subtitle">
          с серверами в России и открытым исходным кодом
        </div>
        <div class="landing__head-buttons">
          <Button
            type="primary"
            size="medium"
            link="https://garage.hawk.so/sign-up?from=landing-top"
          >
            Начать улучшать ПО
          </Button>
          <Button
            type="secondary"
            size="medium"
            link="https://garage.hawk.so/join/6e9fe41c8d6d59b272fda8c43c076ddcb571d3b5b09ad1e95e3a770b6358289c?from=landing-top"
          >
            Посмотреть демо
          </Button>
        </div>
      </div>
      <div class="landing__head-picture-container">
        <img
          class="landing__head-picture"
          src="~/assets/images/project-overview.png"
          title="Хоук — российский трекер ошибок"
          alt="Изображение интерфейса Хоук"
        >
      </div>
    </div>

    <!-- <transition name="fade">
      <Contact
        v-show="isContactUsFormShown"
        :mail="mail"
        @update:mail="updateMail"
        @close="isContactUsFormShown = false;"
      />
    </transition> -->

    <LandingSection>
      <template #icon>
        <div class="features-title-picture">
          <img src="~/assets/images/check-features.png" alt="Хоук обладает всей необходимой функциональностью для мониторинга ошибок в ПО">
        </div>
      </template>
      <template #title>
        <span class="gradient-text gradient-text--pink">
          Мощная функциональность
        </span>
      </template>
      <template #description>
        <span class="gradient-text gradient-text--grey">
          Все, что нужно для мониторинга ошибок
        </span>
      </template>
      <template #content>
        <Features />
      </template>
    </LandingSection>

    <LandingSection>
      <template #icon>
        <div class="integrations-title-picture">
          <img src="~/assets/images/check-integrations.png" alt="Хоук на замену Sentry">
        </div>
      </template>
      <template #title>
        <span class="gradient-text gradient-text--purple">
          Множество интеграций
        </span>
      </template>
      <template #description>
        Подключение за 5 минут
      </template>
      <template #content>
        <Integrations />
      </template>
    </LandingSection>

    <LandingSection>
      <template #icon>
        <img class="sentry-to-hawk-picture" src="~/assets/images/sentry-to-hawk.png" alt="Хоук на замену Sentry">
      </template>
      <template #title>
        Замена Sentry
      </template>
      <template #description>
        Миграция в одну строку
      </template>
      <template #content>
        <SentryCode />
      </template>
    </LandingSection>

    <LandingSection>
      <template #title>
        Проверено продуктами
      </template>
      <template #description>
        Более 1400 проектов используют Хоук
      </template>
      <template #content>
        <div class="used-by">
          <img src="~/assets/svg/used-by/ofd.svg" alt="Платформа ОФД">
          <img src="~/assets/svg/used-by/rocket.svg" alt="Рокетбанк">
          <img src="~/assets/svg/used-by/befree.svg" alt="Befree">
          <img src="~/assets/svg/used-by/slogy.svg" alt="Слоджи">
          <img src="~/assets/svg/used-by/vc.svg" alt="vc.ru">
          <img src="~/assets/svg/used-by/wazzup.svg" alt="Wazzup">
          <img src="~/assets/svg/used-by/dtf.svg" alt="DTF">
          <img src="~/assets/svg/used-by/stworka.svg" alt="Stworka">
        </div>
      </template>
    </LandingSection>

    <div class="section section--with-gradient">
      <div class="section__content">
        <h2 class="section__title">
          Возможности
        </h2>
        <features :features="features" />
      </div>
    </div>
    <div class="content-blocks">
      <gridInfo />

      <div class="how-to-start">
        <h3>Начните сейчас</h3>
        <div class="how-to-start__text">
          <a href="https://garage.hawk.so/sign-up?from=landing-text" target="_blank">Зарегистрируйтесь</a> → Создайте Воркспейс → Создайте проект и получите токен → Подключите SDK в свой код
        </div>
        <div class="how-to-start__link">
          Начало работы с Хоуком
          <a href="https://codex.so/hawk-getting-started" target="_blank">https://codex.so/hawk-getting-started</a>
        </div>
      </div>

      <a style="margin: 25px auto" href="https://garage.hawk.so/sign-up?from=landing-bottom" class="landing__content-head-button">
        Зарегистрироваться
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Features from '~/components/features.vue';
import { Feature } from '~/types/feature';

export default Vue.extend({
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          name: 'Хоук — российский трекер ошибок',
          description: 'Мониторинг ошибок в ПО с серверами в России и открытым исходным кодом',
          image: 'https://hawk-tracker.ru/hawk-ru-og-image.png',
          url: 'https://hawk-tracker.ru',
          publisher: {
            '@type': 'Organization',
            name: 'Хоук',
            logo: {
              '@type': 'ImageObject',
              url: 'https://hawk-tracker.ru/hawk-ru-og-image.png',
            },
          },
          creator: {
            '@type': 'Organization',
            name: 'CodeX',
            description: 'Команда open-source разработчиков',
            url: 'https://codex.so',
            logo: {
              '@type': 'ImageObject',
              url: 'https://codex.so/public/app/img/codex-logo.svg',
            },
            sameAs: [
              'http://twitter.com/codex_team',
            ],
          },
        },
        {
          '@type': 'Product',
          name: 'Хоук — российский трекер ошибок',
          description: 'Мониторинг ошибок в ПО с серверами в России и открытым исходным кодом',
          image: 'https://hawk-tracker.ru/hawk-ru-og-image.png',
          brand: {
            '@type': 'Brand',
            name: 'Хоук',
          },
          offers: {
            '@type': 'Offer',
            url: 'https://hawk-tracker.ru',
            priceCurrency: 'RUB',
            price: '0', // Adjust this value to the actual price
            availability: 'https://schema.org/InStock',
          },
          creator: {
            '@type': 'Organization',
            name: 'CodeX',
            description: 'Команда open-source разработчиков',
            url: 'https://codex.so',
            logo: {
              '@type': 'ImageObject',
              url: 'https://codex.so/public/app/img/codex-logo.svg',
            },
            sameAs: [
              'http://twitter.com/codex_team',
            ],
          },
        },
      ],
    };
  },
  data(): {
    /**
     * Features list description
     */
    features: Feature[],

    /**
     * Contact us form appears after few seconds
     * and can be closed by user
     */
    isContactUsFormShown: boolean,

    /**
     * Scroll Y position
     */
    scroll: number,

    /**
     * Label for download app button,
     * will be changed after page load to fit user platform
     */
    downloadButtonLabel: string,

    /**
     * Href for download app button,
     * will be changed after page load to fit user platform
     */
    downloadButtonHref: string,

    /**
     * Mail that was left by user
     */
    mail: string;
    } {
    return {
      /**
       * Features list description
       */
      features: [
        {
          title: 'Отслеживайте ошибки',
          description: 'Хоук покажет, что пошло не по плану в вашей программе',
          picture: 'feature-list',
        },
        {
          title: 'Исследуйте детали',
          description: 'Хоук поможет понять и исправить причину проблемы',
          picture: 'feature-event',
        },
        {
          title: 'Следите за здоровьем ПО',
          description: 'Оценивайте и улучшайте качество вашего продукта',
          picture: 'feature-graph',
          style: 'margin-bottom: -21px',
        },
        {
          title: 'Оперативные уведомления',
          description: 'Не пропустите важные события, оставаясь на связи в Slack, Telegram или на почте',
          pictureComponent: 'features-be-notified',
        },
      ],

      /**
       * Contact us form appears after few seconds
       * and can be closed by user
       */
      isContactUsFormShown: false,

      /**
       * Scroll Y position
       */
      scroll: 0,

      /**
       * Label for download app button,
       * will be changed after page load to fit user platform
       */
      downloadButtonLabel: 'Download for Desktop',

      /**
       * Href for download app button,
       * will be changed after page load to fit user platform
       */
      downloadButtonHref: 'https://github.com/codex-team/hawk.desktop',

      mail: '',
    };
  },
  head() {
    return {
      title: 'Хоук — российский трекер ошибок',
      link: [
        {
          rel: 'canonical',
          href: 'https://hawk-tracker.ru',
          id: 'canonical',
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Мониторинг ошибок в ПО с серверами в России и открытым исходным кодом',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Хоук — российский трекер ошибок',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Мониторинг ошибок в ПО с серверами в России и открытым исходным кодом',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://hawk-tracker.ru/hawk-ru-og-image.png',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://hawk-tracker.ru',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Хоук — российский трекер ошибок',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Мониторинг ошибок в ПО с серверами в России и открытым исходным кодом',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://hawk-tracker.ru/hawk-ru-og-image.png',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://hawk-tracker.ru',
        },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scroll = window.scrollY;
    }, { passive: true });

    this.updateDownloadButtomWithPlatform();

    setTimeout(() => {
      this.isContactUsFormShown = true;
    }, 2500);
  },
  methods: {
    /**
     * Returns the visitor OS
     *
     * @returns platform code name
     */
    getPlatform(): string {
      const ua = window.navigator.userAgent.toLowerCase();

      if (ua.includes('windows')) {
        return 'Windows';
      } else if (ua.includes('mac')) {
        return 'macOS';
      } else if (ua.includes('linux')) {
        return 'Linux';
      }

      return 'Unknown';
    },

    updateMail(newMail: string) {
      this.mail = newMail;
    },

    /**
     * Update label and href of the Download button
     * corresponding by user platform
     */
    updateDownloadButtomWithPlatform(): void {
      const platform = this.getPlatform();

      switch (platform) {
        case 'Windows':
          this.downloadButtonLabel = 'Download for Windows';
          break;
        case 'macOS':
          this.downloadButtonLabel = 'Download for macOS';
          break;
        case 'Linux':
          this.downloadButtonLabel = 'Download for Linux';
          break;
        default:
          this.downloadButtonLabel = 'Download for Desktop';
          break;
      }
    },
  },
});
</script>

<style scoped lang="postcss">
@import url('@/assets/styles/variables.pcss');

@custom-media --screen-tall (min-height: 1200px);
@custom-media --screen-middle (max-width: 1170px);

.landing {
  &__head {
    background: linear-gradient(180deg, #121213 0%, #0B0911 100%);
    border-radius: 22px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 90px 0 60px;
    }

    &-title {
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      color: #F2F6FF;

      font-weight: 700;
      font-size: 50px;
      line-height: 59px;
      background: linear-gradient(90deg, #CDD9FF 0%, #FFFFFF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

    }

    &-subtitle {
      margin-top: 10px;
      font-weight: 500;
      font-size: 18px;
      line-height: 147%;

      background: linear-gradient(90deg, #9CA1FF 0%, #FFFFFF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

    }

    &-picture-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: -80px;

      &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        background: linear-gradient(135deg, #43455E 0%, #38374A 100%);
        border-radius: 9px 9px 2px 2px;
        z-index: 1;
      }
    }

    &-picture {
      max-width: var(--layout-content-container-width);
      border-radius: 7px 7px 0 0;
      display: block;
      z-index: 2;
    }

    &-buttons {
      display: flex;
      gap: 20px;
      padding-top: 30px;
    }

  }
}

.sentry-to-hawk-picture {
  height: 43px;
}

.integrations-title-picture,
.features-title-picture {
  position: relative;

  img {
    height: 43px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(50% 50% at 50% 50%, #D7C9FF, transparent);
    width: 120px;
    height: 120px;
    z-index: -1;
    opacity: 0.15;
  }
}

.features-title-picture {
  &::before {
    background: radial-gradient(50% 50% at 50% 50%, #FFBCEF, transparent);
  }
}

.gradient-text {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  &--purple {
    background-image: linear-gradient(90deg, #CDD9FF 0%, #989CE6 100%);
  }

  &--pink {
    background-image: linear-gradient(90deg, #ffffff 0%, #F7AEFF 100%);
  }

  &--grey {
    background-image: linear-gradient(90deg, #ffffff 0%, #838383 100%);
  }
}

.used-by {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
}

.content-blocks {
  padding: 30px 40px;
  display: inline-grid;
  justify-content: center;

  @media (--screen-mobile) {
    padding: 20px 20px;
  }
}

.section {
  position: relative;
  padding-top: 100px;

  @media (--screen-middle) {
    padding-top: 70px;
  }

  @media (--screen-mobile) {
    padding-top: 40px;
  }

  padding-bottom: 80px;

  &--with-gradient::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transform: scaleY(-1);
    background-image: linear-gradient(180deg, rgba(24,27,35,0.00) 0%, #080E20 100%);
    height: 500px;
    z-index: -1;
  }

  &__content {
    max-width: var(--layout-block-inner-container-width);
    margin: 0 auto;
    padding: 0 var(--layout-paddings-horisontal);
  }

  &__title {
    font-weight: 800;
    font-size: 70px;
    color: #F2F6FF;
    letter-spacing: 0;
    margin-bottom: 50px;

    @media (--screen-small) {
      font-size: 50px;
      margin-bottom: 30px;
    }

    @media (--screen-mobile) {
      font-size: 30px;
      text-align: center;
    }
  }

  &--small {
    text-align: center;
  }

  &--small &__title {
    font-size: 37px;
    margin-bottom: 30px;

    @media (--screen-mobile) {
      font-size: 26px;
      margin-bottom: 10px;
    }
  }
}

.how-to-start {
  margin-top: 120px;
  color: #929AAD;
  text-align: center;

  h3 {
    font-size: 26px;
    line-height: 22px;;
    font-weight: 700;
    color: #F2F6FF;
  }

  &__text {
    margin-top: 26px;
    font-size: 14px;
    line-height: 1.45em;

    a {
      border-bottom: 1px solid rgba(187, 192, 255, 0.2);
    }
  }

  &__link {
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    padding: 15px 20px;
    text-align: left;
    gap: 2px;
    color: #A9B7D7;
    background: #15171F;
    border: 1px solid rgba(187, 192, 255, 0.08);
    border-radius: 14px;
    margin: 26px auto 0;

    a {
      color: #5584F5;
      text-decoration: none;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
