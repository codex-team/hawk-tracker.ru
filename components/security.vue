<template>
  <div class="block-inner-container">
    <div class="block-content-container">
      <div class="security">
        <div class="security__col security__col--left">
          <div class="security__cell security__cell--open-source">
            <IconGitHub />
            <FeatureTitle
              title="Open Source"
              description="Исходный код опубликован и открыт. Любой может изучить и предложить улучшения"
            />
          </div>
          <div class="security__cell security__cell--highload">
            <div class="highload-illustration">
              100 000 000
            </div>
            <FeatureTitle
              title="Устойчив к нагрузкам"
              description="Независимые сервисы приемки ивентов, просмотра отчетов и уведомлений"
            />
          </div>
          <div class="security__cell security__cell--support">
            <img src="@/assets/images/hand.png" aria-hidden="true">
            <FeatureTitle
              title="Прямая техподдержка"
              description="Сразу сделаем чат в Telegram, где можно задавать вопросы и получать помощь"
            />
          </div>
        </div>
        <div class="security__col security__col--right">
          <div class="security__cell security__cell--servers">
            <img src="@/assets/images/russian-flag.png" alt="Российский флаг">
            <FeatureTitle
              title="Сервера в России"
              description="Исключены риски недоступности из‑за зарубежных провайдеров"
              centered
            />
          </div>
          <div class="security__cell security__cell--fz">
            <FeatureTitle
              title="152 ФЗ"
              description="Храним данные в РФ, не передаем за рубеж"
            />
          </div>
          <div class="security__cell security__cell--edo">
            <FeatureTitle
              title="ЭДО"
              description="Можно платить по счету, закрывающие документы подпишем онлайн"
            />
          </div>
          <div class="security__cell security__cell--developer">
            <img src="@/assets/svg/codex.svg" alt="Логотип команды CodeX">
            <FeatureTitle
              title="Российский разработчик"
              description="Опытная команда с многолетней историей"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style scoped>
@import url('@/assets/styles/variables.pcss');

.security {
  --gap: 20px;

  display: grid;
  grid-template-columns: 420px 1fr;
  gap: var(--gap);

  &__col {
    &--left {
      display: flex;
      flex-direction: column;
      gap: var(--gap);
    }

    &--right {
      display: grid;
      grid-template-areas:
        'top top'
        'left-middle right-middle'
        'bottom bottom';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr auto auto;
      gap: var(--gap);
    }
  }

  &__cell {
    width: 100%;
    border-radius: 14px;
    border: 1px solid var(--color-separator-island);
    color: var(--color-text-secondary);
    overflow: hidden;
    padding: calc(var(--layout-paddings-grid) * 0.9) var(--layout-paddings-grid);

    &--open-source {
      svg {
        width: 52px;
        height: 52px;
        color: #fff;
        margin: 14px 0 30px;
      }
    }

    &--highload {
      background: linear-gradient(180deg, #090909 0%, #000000 31.32%, #090909 99%);

      .highload-illustration {
        margin: 14px 0 30px;
      }
    }

    &--support {
      img {
        width: 45px;
        margin: 14px 0 30px;
      }
    }

    &--servers {
      grid-area: top;
      text-align: center;
      padding-bottom: 44px;
      background-image: url('@/assets/svg/russia-bg.svg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      img {
        width: 100px;
        margin: 40px 0 20px;
      }

      .feature-title {
        --title-size: 27.83px;
        --desc-max-width: 264px;
      }
    }

    &--fz {
      grid-area: left-middle;
    }

    &--edo {
      grid-area: right-middle;
    }

    &--fz,
    &--edo {
      padding-block: 45px;
    }

    &--fz,
    &--edo,
    &--developer {
      padding-inline: 45px;
    }

    &--developer {
      grid-area: bottom;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;

      img {
        width: 95px;
        order: 2;
      }

      .feature-title {
        --gap: 7px;
      }
    }
  }
}

.highload-illustration {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -0.02em;

  background: linear-gradient(360deg, #737373 0%, #B2B2B2 100%);
  line-height: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>
