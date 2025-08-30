<template>
  <div class="feature-releases">
    <FeatureTitle
      title="Прикрепление релизов"
      description="Отслеживайте качество релизов, отлавливайте регрессии"
    />
    <div class="f-commits">
      <div class="f-commits__label">
        Suspected Commits
      </div>
      <div class="f-commits__commit">
        <div class="f-commits__commit-left">
          <div class="f-commits__commit-title">
            Merge pull request #518 from feat/notification
          </div>
          <div class="f-commits__commit-author">
            <UserAva :user="3" :size="16" />
            taly@cdx.so committed a day ago
          </div>
        </div>
        <div class="f-commits__commit-right">
          <div class="f-commits__commit-hash">
            7fd7f8
          </div>
        </div>
      </div>
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
  data() {
    return {

    };
  },
  methods: {
  },
});
</script>

<style>
@import '~/assets/styles/variables.pcss';

.feature-releases {
  padding: var(--layout-paddings-grid);

  .feature-title {
    margin-bottom: 25px;
  }
}

.f-commits {
  display: flex;
  flex-direction: column;
  gap: 6px;

  &__label {
    font-size: 12px;
    color: var(--hawk-text-secondary);
    letter-spacing: 0.10px;
    text-transform: uppercase;
    font-weight: 600;
  }

  &__commit {
    display: flex;
    gap: 10px;
    background-color: var(--hawk-color-bg-main);
    padding: 11px 16px;
    border-radius: 10px;

    &-left {
      display: flex;
      flex-direction: column;
      gap: 5px;
      flex: 1;
    }

    &-right {
      display: flex;
      flex-direction: column;
      gap: 4px;
      align-items: center;
      justify-content: center;
    }

    &-title {
      font-size: 14px;
      color: var(--hawk-text-primary);
      font-weight: bold;

      @media (--screen-mobile) {
        font-size: 12px;
      }
    }

    &-author {
      font-size: 13px;
      line-height: 1.35em;
      color: var(--hawk-text-secondary);
      display: flex;
      align-items: center;
      gap: 6px;

      @media (--screen-mobile) {
        font-size: 11px;

        img {
          transform: scale(0.8);
        }
      }
    }

    &-hash {
      font-size: 11px;
      line-height: 1.35em;
      color: var(--hawk-text-secondary);
      font-family: var(--font-mono);
      background-color: #171920;
      padding: 3px 6px;
      border-radius: 5px;

      @media (--screen-mobile) {
        display: none;
      }
    }
  }

}

</style>
