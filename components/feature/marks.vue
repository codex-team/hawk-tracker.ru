<template>
  <div class="feature-marks">
    <div class="feature-marks__button">
      <IconCheck color-bg="#313647" color-fg="#080808" />
      Исправлено
    </div>

    <div class="feature-marks__button">
      <IconEye style="color: #313647;" />
      Игнорировать
    </div>

    <div class="feature-marks__button">
      <IconStar color="#313647" />
      В избранное
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserAva from '../user-ava.vue';
import { useIntersectionObserver } from '~/composables/useIntersectionObserver';
import vueSvg from '~/assets/svg/vue.svg';

export default Vue.extend({
  setup() {
    const { isVisible, elementRef } = useIntersectionObserver({
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px',
    });

    return {
      isVisible,
      elementRef,
    };
  },
});
</script>

<style>
@import '~/assets/styles/variables.pcss';

.feature-marks {
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  background: linear-gradient(180deg, #090909 0%, #0B0B0B 100%), #000000;
}

.feature-marks__button {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--hawk-color-bg-main  );
  border-radius: 6px;
  padding: 7px 11px;
  font-size: 14px;
  line-height: 17px;
  color: var(--hawk-text-secondary);
  font-weight: 500;
  white-space: nowrap;

  .svg-icon {
    width: 14px;
    height: 14px;
  }
}
</style>
