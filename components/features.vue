<template>
  <div class="block-inner-container">
    <div class="block-content-container">
      <div class="features">
        <!-- <div class="features__row">
          <div class="features__cell">
            <FeatureTelemetry />
          </div>
          <div class="features__cell">
            <FeatureAlerts />
          </div>
        </div>

        <div class="features__row">
          <div class="features__cell features__cell--full">
            <FeatureFeed />
          </div>
        </div>

        <div class="features__row">
          <div class="features__cell features__cell--full">
            <FeatureTracing />
          </div>
        </div>

        <div class="features__row features__row--grid-context">
          <div class="features__cell">
            <FeatureDetails />
          </div>
          <div class="features__cell">
            <FeatureCustomFields />
          </div>

          <div class="features__cell">
            <FeatureReleases />
          </div>
        </div> -->

        <div class="features__row features__row--grid-context features__row--grid-context--right-bottom-wide">
          <div class="features__cell">
            <FeatureMembership />
          </div>
          <div class="features__cell">
            Исправлено Игорировать В избранное
          </div>

          <div class="features__cell">
            Назначайте ответственных
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

<style lang="postcss" scoped>
@import url('@/assets/styles/variables.pcss');

.features {
  --gap: 20px;

  display: flex;
  flex-direction: column;
  gap: var(--gap);
  width: 100%;

  &__row {
    display: flex;
    flex-direction: row;
    gap: var(--gap);
    width: 100%;

    &--grid-context {
      display: grid;
      grid-template-areas:
        'left right-top'
        'left right-bottom';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: var(--gap);
      align-items: stretch;
      min-height: 40px;

      &--right-bottom-wide {
        grid-template-rows: 1fr 80%;
      }

      & > .features__cell {
        height: 100%;
      }

      & > .features__cell:nth-of-type(1) {
        grid-area: left;
      }

      & > .features__cell:nth-of-type(2) {
        grid-area: right-top;
      }

      & > .features__cell:nth-of-type(3) {
        grid-area: right-bottom;
      }
    }
  }

  &__cell {
    background-color: var(--color-bg-third);
    width: 100%;
    border-radius: 14px;
    border: 1px solid var(--color-separator-island);
    color: var(--color-text-secondary);
    overflow: hidden;

    &:nth-of-type(2n) {
      flex-basis: 62%;
    }

    &--full {
      flex-basis: 100%;
      border: 0;
    }
  }
}
</style>
