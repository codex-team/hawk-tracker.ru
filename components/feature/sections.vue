<template>
  <div
    ref="elementRef"
    class="feature-sections"
    :class="{
      'feature-sections--visible': isVisible,
    }"
  >
    <div
      v-for="section in sections"
      :key="section.label"
      class="feature-sections__section"
    >
      <div class="feature-sections__section-label">
        {{ section.label }}
        <img
          v-if="section.labelIcon"
          :src="section.labelIcon"
          alt="section.label"
        >
      </div>
      <div class="feature-sections__section-rows">
        <div
          v-for="(row, rowIndex) in section.rows"
          :key="row.title"
          class="feature-sections__section-row"
          :style="{
            '--animation-delay': `${rowIndex * 0.2}s`
          }"
        >
          <div class="feature-sections__section-row-title">
            {{ row.title }}
          </div>
          <div class="feature-sections__section-row-value">
            <template v-if="row.type === 'string'">
              {{ row.value }}
            </template>
            <template v-else-if="row.type === 'component'">
              <span class="feature-sections__section-row-value-component">{{ row.value }}</span>
            </template>
            <FeatureJson
              v-else-if="row.type === 'json'"
              :json="row.value"
            />
            <template v-else-if="row.type === 'user'">
              <span class="feature-sections__section-row-value-user">
                <UserAva :user="getUserValue(row.value)?.id" :size="12" />
                {{ getUserValue(row.value)?.email }}
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { useIntersectionObserver } from '~/composables/useIntersectionObserver';

export default Vue.extend({
  name: 'FeatureSections',
  props: {
    sections: {
      type: Array as PropType<{
        label: string;
        labelIcon: string;
        rows: {
          title: string;
          type: string;
          value: string | Record<string, any>;
        }[];
      }[]>,
      required: true,
    },
  },
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
  methods: {
    getUserValue(value: string | Record<string, any>): {email: string, id: number} | null {
      if (typeof value === 'object') {
        return value as {email: string, id: number};
      }

      return null;
    },
  },
});
</script>

<style lang="pcss">
@import url('@/assets/styles/variables.pcss');

/* Animation keyframes for row enter animation */
@keyframes rowSlideIn {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-sections {
  display: flex;
  flex-direction: column;
  gap: 22px;

  /* Initial state for animation */
  opacity: 0;
  will-change: transform, opacity;

  /* Animation when visible */
  &--visible {
    opacity: 1;
    transition: opacity 0.3s ease-out;

    .feature-sections__section-row {
      animation: rowSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      animation-delay: var(--animation-delay);
    }
  }

  &__section {
    display: flex;
    flex-direction: column;

    &-label {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 9px;
      color: var(--hawk-text-secondary);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 3px;

      img {
        height: 11px;
        margin-left: 5px;
      }
    }

    &-rows {
      display: flex;
      flex-direction: column;
      gap: 2px;

      font-size: 10px;
      line-height: 1.35em;
    }

    &-row {
      display: grid;
      grid-template-columns: 20% auto;
      background: var(--hawk-color-bg-main);
      border-radius: 3px;
      padding: 6px 10px;

      /* Initial state for row animation */
      opacity: 0;
      will-change: transform, opacity;

      @media (--screen-mobile) {
        gap: 10px;
        font-size: 9px;
      }

      &:first-of-type {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
      }

      &:last-of-type {
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
      }

      &-title {
        color: var(--hawk-text-primary);
        font-weight: 600;
        letter-spacing: 0.02em;
      }

      &-value {
        color: var(--hawk-text-primary);
        font-family: var(--font-mono);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &-component {
          color: var(--color-code-added-line-text);
        }

        &-user {
          display: flex;
          align-items: center;
          gap: 6px;
        }
      }
    }
  }

  .f-json {
    font-size: inherit;
    line-height: 1.35em;
  }
}
</style>
