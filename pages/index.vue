<template>
  <div class="landing">
    <div class="landing__head">
      <div class="landing__head-content">
        <h1 class="landing__head-title">
          Мониторинг ошибок в ПО
        </h1>
        <div class="landing__head-subtitle">
          с серверами в России и открытым исходным кодом
        </div>
        <div class="landing__head-buttons">
          <Button
            type="primary"
            size="medium"
            :link="landingSignupButton()"
          >
            Начать улучшать ПО
          </Button>
          <Button
            type="secondary"
            size="medium"
            :link="landingDemoButton()"
          >
            Посмотреть демо
          </Button>
        </div>
      </div>
      <div class="landing__head-picture-container">
        <img
          class="landing__head-picture"
          src="~/assets/images/project-overview.png"
          title="Хоук — российский трекер ошибок"
          alt="Изображение интерфейса Хоук"
        >
      </div>
    </div>

    <LandingSection>
      <template #title>
        Проверено продуктами
      </template>
      <template #description>
        Более 1400 проектов используют Хоук
      </template>
      <template #content>
        <UsedBy />
      </template>
    </LandingSection>

    <LandingSection>
      <template #icon>
        <div class="security-title-picture" aria-hidden="true">
          <img src="~/assets/images/check-secure.png">
        </div>
      </template>
      <template #title>
        <span class="gradient-text gradient-text--yellow">
          Безопасный и надежный
        </span>
      </template>
      <template #description>
        Позволяет не зависеть от зарубежных сервисов
      </template>
      <template #content>
        <Security />
      </template>
    </LandingSection>

    <LandingSection>
      <template #icon>
        <div class="features-title-picture" aria-hidden="true">
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
          Все, что нужно для мониторинга ошибок
        </span>
      </template>
      <template #content>
        <Features />
      </template>
    </LandingSection>

    <LandingSection>
      <template #icon>
        <div class="integrations-title-picture" aria-hidden="true">
          <img src="~/assets/images/check-integrations.png" alt="Хоук на замену Sentry">
        </div>
      </template>
      <template #title>
        <span class="gradient-text gradient-text--purple">
          Множество интеграций
        </span>
      </template>
      <template #description>
        Подключение за 5 минут
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
        Миграция в одну строку
      </template>
      <template #content>
        <SentryCode />
      </template>
    </LandingSection>

    <LandingSection>
      <template #title>
        Доступные цены
      </template>
      <template #description>
        Пользуйтесь бесплатно или от 99 ₽
      </template>
      <template #content>
        <div class="block-inner-container">
          <div class="block-content-container">
            <div class="prices">
              <div class="prices__item">
                <FeatureTitle
                  title="Бесплатно для стартапов"
                  description="До 1000 ивентов в месяц"
                />
              </div>
              <div class="prices__item">
                <FeatureTitle
                  title="От 99 ₽ в месяц"
                  description="скидки крупным клиентам"
                />
              </div>
              <div class="prices__item">
                <FeatureTitle
                  title="Оплата картой"
                  description="Все банки РФ + СБП"
                />
              </div>
              <div class="prices__item">
                <FeatureTitle
                  title="Оплата по счету"
                  description="По реквизитам компании"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </LandingSection>

    <div class="block-inner-container">
      <div class="block-content-container">
        <StartNow />
      </div>
    </div>

    <transition name="fade">
      <Contact
        v-show="isContactUsFormShown"
        :mail="mail"
        @update:mail="updateMail"
        @close="isContactUsFormShown = false;"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Feature } from '~/types/feature';
import { useUTM } from '~/composables/useUTM';

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
  computed: {
    /**
     * Landing page signup button URL with UTM tracking
     */
    landingSignupButton() {
      return useUTM('https://garage.hawk.so/sign-up', 'landing-top');
    },
    /**
     * Landing page demo button URL with UTM tracking
     */
    landingDemoButton() {
      return useUTM('https://garage.hawk.so/join/6e9fe41c8d6d59b272fda8c43c076ddcb571d3b5b09ad1e95e3a770b6358289c', 'landing-demo');
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scroll = window.scrollY;
    }, { passive: true });

    this.updateDownloadButtomWithPlatform();

    setTimeout(() => {
      this.isContactUsFormShown = true;
    }, 500);
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
    margin: var(--layout-paddings-appshell);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 0 var(--layout-paddings-appshell);

    @media (--screen-mobile) {
      margin: var(--layout-paddings-appshell) 0 0;
    }

    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 90px 0 60px;

      @media (--screen-mobile) {
        padding: 60px 0 30px;
      }
    }

    &-title {
      font-size: 40px;
      line-height: 48px;
      font-weight: 800;
      color: #F2F6FF;

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

      @media (--screen-mobile) {
        margin-bottom: -20px;
      }

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
      width: 100%;
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
.features-title-picture,
.security-title-picture {
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

.security-title-picture {
  &::before {
    background: radial-gradient(50% 50% at 50% 50%, #FFDC8C, transparent);
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

  &--yellow {
    background-image: linear-gradient(90deg, #FFFAEB 32%, #ffffff 100%);
  }
}

.prices {
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (--screen-mobile) {
    flex-direction: column;
  }

  &__item {
    border: 1px solid var(--color-separator);
    border-radius: 14px;
    padding: var(--layout-paddings-horisontal);

    .feature-title {
      gap: 4px;
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
