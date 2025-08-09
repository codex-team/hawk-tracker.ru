<template>
  <div class="feature-title" :class="{ 'feature-title--centered': centered }">
    <h2>
      {{ title }}
    </h2>

    <p class="feature-title__description">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    centered: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="pcss">
.feature-title {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &--centered {
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: 20px;
    line-height: 1.2;
    font-weight: bold;
    color: var(--color-text-main);
  }

  &__description {
    font-size: 14px;
    color: var(--color-text-secondary);
    line-height: 20px;
  }
}
</style>
