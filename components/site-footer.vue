<template>
  <div class="footer">
    <div class="block-inner-container">
      <div class="block-content-container">
        <div class="footer-menu">
          <div
            v-for="item in menu"
            :key="item.section"
            class="footer-menu-section"
          >
            <div class="footer-menu-section-title">
              {{ item.section }}
            </div>
            <div class="footer-menu-section-links">
              <a
                v-for="link in item.links"
                :key="link.title"
                class="footer-menu-section-link"
                :href="link.link"
                target="_blank"
              >
                {{ link.title }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="block-content-container">
        <div class="footer-island">
          <div class="footer-island__left">
            <span class="footer-island__logo">
              Хоук
            </span>
            <span class="footer-island__text">
              © 2018—present
            </span>
            <span class="footer-island__text">
              Россия, г. Санкт-Петербург
            </span>
          </div>
          <div class="footer-island__right">
            <a href="mailto:team@hawk.so">
              team@hawk.so
            </a>
            <a href="https://t.me/hawk_tracker" class="link-with-icon">
              <IconTelegram alt="Telegram logo" />
              hawk-tracker
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import IconTelegram from '~/components/icons/IconTelegram.vue';

export default Vue.extend({
  components: {
    IconTelegram,
  },
  data() {
    return {
      menu: [
        {
          section: 'База знаний',
          links: [
            {
              title: 'Начало работы с Хоуком',
              link: 'https://docs.hawk-tracker.ru/getting-started',
            },
            {
              title: 'Как получить Интеграционный Токен',
              link: 'https://docs.hawk-tracker.ru/integrat-token',
            },
            {
              title: 'Интеграция с JavaScript',
              link: 'https://docs.hawk-tracker.ru/javascript',
            },
            {
              title: 'Трекинг консоли браузера',
              link: 'https://docs.hawk-tracker.ru/console-tracker',
            },
            {
              title: 'Отправка релизов',
              link: 'https://docs.hawk-tracker.ru/releases',
            },
            {
              title: 'Фильтрация чувствительных данных',
              link: 'https://docs.hawk-tracker.ru/sensitive-data-filtering',
            },
            {
              title: 'Миграция с Sentry',
              link: 'https://docs.hawk-tracker.ru/sentry-migration',
            },
          ],
        },
        {
          section: 'Интеграции',
          links: [
            {
              title: 'JavaScript/TypeScript (browser)',
              link: 'https://github.com/codex-team/hawk.javascript',
            },
            {
              title: 'Node.js',
              link: 'https://github.com/codex-team/hawk.nodejs',
            },
            {
              title: 'React',
              link: 'https://github.com/codex-team/hawk.javascript?tab=readme-ov-file#usage-in-react-project',
            },
            {
              title: 'Vue',
              link: 'https://github.com/codex-team/hawk.javascript?tab=readme-ov-file#integrate-to-vue-application',
            },
            {
              title: 'Nuxt',
              link: 'https://github.com/codex-team/hawk.nuxt',
            },
            {
              title: 'Webpack',
              link: 'https://github.com/codex-team/hawk.webpack.plugin',
            },
            {
              title: 'Vite',
              link: 'https://github.com/codex-team/hawk.vite.plugin',
            },
            {
              title: 'Python',
              link: 'https://github.com/codex-team/hawk.python',
            },
            {
              title: 'Flask',
              link: 'https://github.com/codex-team/hawk.python/blob/master/docs/flask.md',
            },
            {
              title: 'FastAPI',
              link: 'https://github.com/codex-team/hawk.python/blob/master/docs/fastapi.md',
            },
            {
              title: 'PHP',
              link: 'https://github.com/codex-team/hawk.php',
            },
            {
              title: 'Symfony',
              link: 'https://github.com/codex-team/hawk.symfony',
            },
            {
              title: 'Laravel',
              link: 'https://github.com/codex-team/hawk.laravel',
            },
            {
              title: 'Go',
              link: 'https://github.com/codex-team/hawk.go',
            },
            {
              title: 'Все интеграции',
              link: 'https://docs.hawk-tracker.ru/integrations',
            },
          ],
        },
        {
          section: 'Документы',
          links: [
            {
              title: 'Цены',
              link: 'https://hawk-tracker.ru/pricing.pdf',
            },
            {
              title: 'Оферта',
              link: 'https://hawk-tracker.ru/oferta.pdf',
            },
            {
              title: 'Лицензии',
              link: 'https://docs.hawk-tracker.ru/licenses',
            },
            {
              title: 'Политика обработки персональных данных',
              link: 'https://docs.hawk-tracker.ru/privacy-policy',
            },
            {
              title: 'IT Security Policy',
              link: 'https://docs.hawk-tracker.ru/it-security-policy',
            },
          ],
        },
      ],

    };
  },
  methods: {
    /**
     * Shows/Hides the mobile menu
     */
    toggleMobileMenu(): void {
      this.mobileMenuShowed = !this.mobileMenuShowed;
    },
  },
});
</script>

<style lang="postcss">
@import url('@/assets/styles/variables.pcss');
.footer {
  color: var(--color-text-third);

  --menu-section-title-gap: 20px;
  --menu-direction: row;
  --menu-links-gap: 10px;

  @media (--screen-mobile) {
    --menu-section-title-gap: 10px;
    --menu-direction: column;
    --menu-links-gap: 4px;
  }

  &-menu {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-direction: var(--menu-direction);

    &-section {
      &-title {
        color: var(--color-text-secondary);
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        margin-bottom: var(--menu-section-title-gap);
      }

      &-links {
        display: flex;
        flex-direction: column;
        gap: var(--menu-links-gap);
      }

      &-link {
        color: inherit;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        text-decoration: none;

        &:visited {
          color: var(--color-text-link-visited);
        }

        &:hover {
          color: var(--color-text-main);
        }

      }
    }
  }

  &-island {
    --padding: 10px 20px;
    --direction: row;
    --title-font-size: 15px;
    --logo-bottom-gap: 0;
    --sections-gap: 18px;

    @media (--screen-mobile) {
      --padding: 20px;
      --direction: column;
      --title-font-size: 22px;
      --logo-gap: 20px;
      --sections-gap: 10px;
    }

    display: flex;
    margin: 50px 0 20px;
    border-radius: 14px;
    padding: var(--padding);
    gap: 20px;
    background: var(--color-bg-secondary);
    justify-content: space-between;
    flex-direction: var(--direction);

    &__left,
    &__right {
      display: flex;
      gap: var(--sections-gap);
    }

    &__left {
      flex-direction: var(--direction);
    }

    &__logo {
      color: var(--color-text-main);
      font-size: var(--title-font-size);
      font-weight: bold;
      line-height: 22px;
      margin-bottom: var(--logo-bottom-gap);
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: var(--color-text-main);
      }
    }

  }
}
</style>
