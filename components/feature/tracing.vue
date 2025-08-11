<template>
  <div class="feature-tracing">
    <div class="feature-tracing__container">
      <FeatureTitle
        title="Трассировка ошибки"
        description="Покажет, какой код привел к проблеме пользователя"
      />

      <div
        ref="elementRef"
        class="f-trace"
        :class="{
          'f-trace--visible': isVisible,
        }"
      >
        <div class="f-trace__label">
          Backtrace
        </div>

        <div class="f-trace__content">
          <div
            v-for="item in items"
            :key="item.title"
            class="f-trace__content-item"
          >
            <div class="f-trace__content-item-header">
              <div class="f-trace__content-item-header-left">
                <div class="f-trace__content-item-header-title">
                  {{ item.title }}
                </div>
                <div class="f-trace__content-item-header-subtitle">
                  {{ item.subtitle }}

                  <span class="f-trace__content-item-header-subtitle-line">
                    line {{ item.line }}
                  </span>
                </div>
              </div>
              <div class="f-trace__content-item-header-right">
                <img src="~/assets/svg/chevron-down.svg" alt="chevron-down">
              </div>
            </div>
            <div v-if="item.isOpen && item.code" class="f-trace__content-item-code">
              <div class="f-trace__content-item-code-lines">
                <div
                  v-for="(line, index) in item.code.split('\n')"
                  :key="line"
                >
                  {{ parseInt(item.line.split(':')[0], 10) + index - item.code.split('\n').length / 2 }}
                </div>
              </div>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <pre v-html="item.code" />

              <img
                class="f-trace__content-item-code-char-pointer"
                src="~/assets/svg/chevron-signal.svg"
                aria-hidden="true"
              >
              <div class="f-trace__content-item-code-error">
                Cannot read property “goods” of undefined
              </div>
              <div class="f-trace__content-item-code-tooltip">
                goods:103831
              </div>
            </div>
          </div>
          <div class="f-trace__content-item f-trace__content-item--show-more">
            <img src="~/assets/svg/dots.svg" width="15" height="3" alt="dots">
            3 more files
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useIntersectionObserver } from '~/composables/useIntersectionObserver';

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
      items: [
        {
          title: 'VueComponent.Order',
          subtitle: 'src / components / shop / Order.vue',
          line: '21:28',
          isOpen: true,
          code: `  <span class="token">if</span> (<span class="token">!</span>user) {
      <span class="token">return</span>;
  }

  <span class="token">const</span> <span class="class">order</span> <span class="token">=</span> <span class="method">this</span>.$store.getters[<span class="string">'payments/composeOrder'</span>](<span class="class">this</span>.productId</span>);
  <span class="token">const</span> <span class="class">purchasedProduct</span> <span class="token">=</span> <span class="class">order</span>.goods.<span class="method">filter</span>(<span class="object">g</span> <span class="token">=></span> g.id <span class="token">===</span> <span class="class">this</span>.productId)[0];

  <span class="token">if</span> (<span class="token">!</span>purchasedProduct) {
    <span class="token">return</span>;
  }`,
        },
        {
          title: 'VueComponent.Basket',
          subtitle: 'src / components / shop / Basket.vue',
          line: '194:16',
          isOpen: false,
        },
        {
          title: 'userPaid()',
          subtitle: 'src / store / payments / index.ts',
          line: '238:12',
          isOpen: false,
        },
      ],
    };
  },
  methods: {
  },
});
</script>

<style>
@import '~/assets/styles/variables.pcss';

/* Animation keyframes for trace element enter animation */
@keyframes traceSlideIn {
  0% {
    opacity: 0;
    transform: translateY(40px) ;
  }
  50% {
    opacity: 1;
    transform: translateY(-5px) scale(1.01);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-tracing {
  --padding: var(--layout-paddings-horisontal);

  padding: 56px var(--padding) var(--padding) var(--padding);

  height: 606px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  background: linear-gradient(180deg, #251C20 0%, #0F0A0A 100%);

  &__container {
    max-width: var(--layout-features-wide-content-width);
    width: 100%;
  }

  .feature-title__description {
    color: #C1B1B1
  }

   &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 20%;
    background: linear-gradient(180deg, #71778900 0%, #020303 100%);
  }
}

.f-trace {
  margin-top: 40px;

  /* Initial state for animation */
  opacity: 0;
  will-change: transform, opacity;

  /* Animation when visible */
  &--visible {
    animation: traceSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  &__label {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    color: var(--hawk-text-secondary);
    font-variant-caps: all-petite-caps;
    margin-bottom: 8px;
    letter-spacing: 0.02em;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 3px;

    &-item {
      display: flex;
      flex-direction: column;
      background: var(--hawk-color-bg-main);
      border-radius: 3px;
      padding: 7px 10px;

      &:first-of-type {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      &:last-of-type {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      &--show-more {
        flex-direction: row;
        align-items: center;
        color: var(--hawk-text-secondary);
        gap: 10px;
        font-size: 13.2px;
      }

      &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13.2px;
        line-height: 18px;

        &-title {
          color: var(--hawk-text-primary);
        }

        &-subtitle {
          font-size: 12px;
          line-height: 18px;
          color: var(--hawk-text-secondary);

          &-line {
            margin-left: 12px;
          }
        }

        &-right {
          margin-right: 10px;
        }
      }

      &-code {
        --color-text: #E1E4E8;
        --color-comment: var(--color-text-secondary);
        --color-token: #F97583;
        --color-class: #79B8FF;
        --color-string: #9ECBFF;
        --color-method: #B392F0;
        --color-object: #FFAB70;
        --color-highlighted-line-bg: #c63a5423;

        --padding: 4px;
        --line-height: 21px;

        background: rgba(0, 0, 0, 0.34);
        border-radius: 10px;
        margin-top: 5px;
        font-family: var(--font-mono);
        font-size: 12.8px;
        line-height: var(--line-height);
        color: var(--color-text);
        font-weight: 400;
        font-variant-numeric: tabular-nums;
        position: relative;

        .token {
          color: var(--color-token);
        }

        .string {
          color: var(--color-string);
        }

        .method {
          color: var(--color-method);
        }

        .comment {
          color: var(--color-comment);
        }

        .highlighted-line {
          background: var(--color-highlighted-line-bg);
        }

        .object {
          color: var(--color-object);
        }

        .class {
          color: var(--color-class);
        }

        &-lines {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          font-size: 10px;
          line-height: var(--line-height);
          color: var(--hawk-text-secondary);
          font-family: var(--font-mono);
          padding: var(--padding) 6px;
        }

        pre {
          margin-left: 14px;
          padding: var(--padding) 0;
        }

        &::after {
          content: '';
          display: block;
          width: 100%;
          height: var(--line-height);
          background: var(--color-highlighted-line-bg);
          position: absolute;
          top: calc(var(--padding) + var(--line-height) * 5);
        }

        &-char-pointer {
          position: absolute;
          top: calc(var(--padding) + var(--line-height) * 5 + 10px);
          left: 251px;

          @media (--screen-retina) {
            left: 252.5px;
          }
        }

        &-error {
          position: absolute;
          top: calc(var(--padding) + var(--line-height) * 5 + 32px);
          left: 258px;
          border-radius: 5px;
          color: #FFADB3;
          background: rgba(259, 9, 53, 0.45);
          font-size: 10.4px;
          padding: 3px 6px;
          line-height: 1em;
          font-weight: 500;
          font-family: var(--font-mono);
          font-variant-numeric: tabular-nums;
        }

        &-tooltip {
          position: absolute;
          top: calc(var(--padding) + var(--line-height) * 3 - 8px);
          left: 493px;
          background: #FFE900;
          border-radius: 9px;
          padding: 3px 8px;
          font-size: 12px;
          line-height: 18px;
          color: #000000;
          font-weight: 500;
          font-family: var(--font-mono);
          font-variant-numeric: tabular-nums;

          &::after {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            background: #FFE900;
            transform: rotate(45deg);
            position: absolute;
            left: 50%;
            bottom: -4px;
            margin-left: -4px;
          }
        }
      }
    }

  }

}

</style>
