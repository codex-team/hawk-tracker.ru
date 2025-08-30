<template>
  <div class="landing-section">
    <div
      v-if="$slots.icon"
      class="landing-section__icon"
    >
      <slot name="icon" />
    </div>
    <div class="block-inner-container">
      <div class="landing-section__title">
        <slot name="title" />
      </div>
      <div class="landing-section__description">
        <slot name="description" />
      </div>
    </div>
    <div class="landing-section__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style>
@import url('@/assets/styles/variables.pcss');
.landing-section {
  --title-font-size: 40px;
  --description-font-size: 22px;
  --padding-block: 180px;

  @media (--screen-mobile) {
    --title-font-size: 30px;
    --description-font-size: 18px;
    --padding-block: 100px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: var(--padding-block);

  &__icon {
    margin-bottom: 29px;
  }

  &__title {
    font-size: var(--title-font-size);
    font-weight: 600;
    line-height: 1.2em;
    color: var(--color-text-main);
    margin-bottom: 9px;
    text-align: center;
  }

  &__description {
    font-size: var(--description-font-size);
    line-height: 1.27em;
    color: var(--color-text-secondary);
    margin-bottom: 50px;
    text-align: center;
  }

  &__content {
    max-width: 100%;
    width: 100%;
  }
}
</style>
