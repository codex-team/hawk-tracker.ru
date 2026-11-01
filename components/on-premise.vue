<template>
  <section class="on-premise">
    <div
      id="on-premise"
      class="on-premise__card"
    >
      <img
        class="on-premise__mark"
        src="@/assets/svg/on-premise-castle.svg"
        alt=""
        aria-hidden="true"
      >
      <div class="on-premise__heading">
        <h2 class="on-premise__title">
          On-premise
        </h2>
        <p class="on-premise__subtitle">
          Развернем Хоука в&nbsp;вашем контуре
        </p>
      </div>
      <div class="on-premise__panel">
        <p class="on-premise__lead">
          Хоук может работать в&nbsp;виде <strong>self-hosted</strong> версии на&nbsp;вашей инфраструктуре. Данные об&nbsp;ошибках и&nbsp;пользователях не&nbsp;покидают контур компании.
        </p>
        <div class="on-premise__points">
          <div
            v-for="point in points"
            :key="point.title"
            class="on-premise__point"
          >
            <p class="on-premise__point-title">
              {{ point.title }}
            </p>
            <p class="on-premise__point-text">
              {{ point.text }}
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="on-premise__discuss"
        @click="$emit('discuss')"
      >
        Обсудить детали
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      /**
       * On-premise offer points shown inside the card
       */
      points: [
        {
          title: 'Ваши сервера',
          text: 'Разворачиваем в\u00A0вашем ДЦ/облаке',
        },
        {
          title: 'Закрытый контур',
          text: 'Данные не\u00A0передаются в\u00A0интернет',
        },
        {
          title: 'SSO и\u00A0доступы',
          text: 'Вход через корпоративный аккаунт',
        },
        {
          title: 'Поддержка',
          text: 'Помощь с\u00A0сетапом и\u00A0обновлением',
        },
      ],
    };
  },
});
</script>

<style scoped>
@import url('@/assets/styles/variables.pcss');

.on-premise {
  display: flex;
  justify-content: center;
  padding: 180px var(--layout-paddings-horisontal);

  @media (--screen-mobile) {
    padding-block: 100px;
  }

  &__card {
    /* castle sits 35.5px above the card; keep it clear of the sticky header */
    scroll-margin-top: calc(var(--layout-header-height) + 96px);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 29px;
    width: 100%;
    /* 672: site Inter is wider than the Figma text box, captions stay on one line */
    max-width: 672px;
    padding: 50px 50px 40px;
    background: #0b0303;
    border: 1px solid #671113;
    border-radius: var(--radius-3xl);
    corner-shape: superellipse(1.3);
    box-shadow: 0 4px 32px rgba(255, 0, 0, 0.25);
  }

  &__mark {
    position: absolute;
    top: -35.5px;
    left: 50%;
    display: block;
    transform: translateX(-50%);
  }

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    text-align: center;
  }

  &__title {
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    color: #fff;
  }

  &__subtitle {
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    color: #b5b5b5;
  }

  &__panel {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 20px;
    background: #111113;
    border-radius: 13px;
    color: #b68282;
  }

  &__lead {
    font-size: 15px;
    font-weight: 400;
    line-height: 23px;

    strong {
      font-weight: 700;
      color: #fdd;
      white-space: nowrap;
    }
  }

  &__points {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 14px;
  }

  &__point {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    border: 1px dashed #864747;
    border-radius: 9px;
  }

  &__point-title {
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
  }

  &__point-text {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  }

  &__discuss {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px;
    border: 1px solid #542727;
    border-radius: 10px;
    corner-shape: superellipse(1.3);
    background: none;
    color: #f24d4d;
    font-family: inherit;
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
    cursor: pointer;

    &:hover {
      border-color: #f24d4d;
    }

    &:focus-visible {
      outline: 2px solid #f24d4d;
      outline-offset: 2px;
    }
  }

  @media (--screen-mobile) {
    &__card {
      padding: 48px 16px 28px;
      gap: 22px;
    }

    &__title {
      font-size: 30px;
      line-height: 36px;
    }

    &__subtitle {
      font-size: 18px;
      line-height: 23px;
    }

    &__points {
      grid-template-columns: 1fr;
    }
  }
}
</style>
