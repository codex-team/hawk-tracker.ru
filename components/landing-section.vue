<template>
  <div class="landing-section">
    <div
      v-if="$slots.icon"
      class="landing-section__icon"
    >
      <slot name="icon" />
    </div>
    <div class="landing-section__title">
      <slot name="title" />
    </div>
    <div class="landing-section__description">
      <slot name="description" />
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
.landing-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 180px 0;

  &__icon {
    margin-bottom: 29px;
  }

  &__title {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.2em;
    color: var(--color-text-main);
    margin-bottom: 9px;
    text-align: center;
  }

  &__description {
    font-size: 22px;
    line-height: 1.27em;
    color: var(--color-text-secondary);
    margin-bottom: 50px;
    text-align: center;
  }

  &__content {
    max-width: 100%;
  }
}
</style>
