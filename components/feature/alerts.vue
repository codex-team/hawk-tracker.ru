<template>
  <div class="feature-alerts">
    <FeatureTitle
      title="Алерты"
      description="Получайте уведомления о проблемах в ПО на почту, в Telegram или Slack"
      centered
    />

    <div ref="elementRef" class="tg-message" :class="{ 'tg-message--visible': isVisible }">
      <div class="tg-message__avatar">
        <img src="~/assets/images/hawk-logo.png" aria-hidden="true">
      </div>

      <div class="tg-message__content">
        <div class="tg-message__title">
          Hawk
        </div>

        <span class="tg-message__text">
          null is not an object (evaluating 'e.payload')
        </span>

        <div class="tg-message__code">
          <pre>11:  const e = event;
12:→ payload = e.payload;
13:  if (payload.user.isPaid)</pre>
        </div>

        <span class="tg-message__text">
          <span class="tg-message__link">View Details</span>
          | Hawk Web [Prod] | 5 new
        </span>
        <span class="tg-message__time">
          17:09
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '~/composables/useIntersectionObserver';

const { isVisible, elementRef } = useIntersectionObserver({
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px',
});
</script>

<style lang="pcss">
@import '~/assets/styles/variables.pcss';

.feature-alerts {
  --padding: var(--layout-paddings-horisontal);

  padding: 35px var(--padding) var(--padding) var(--padding);
  background-image: url('~/assets/images/alerts-bg.png');
  background-size: 150%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Animation keyframes for message appearance */
@keyframes messageSlideIn {
  from {
    opacity: 0;
    transform: translateY(50px) scaleX(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.tg-message {
  display: flex;
  flex-direction: row;
  gap: 12px;
  opacity: 0;
  transform: translateY(50px) scaleX(0.8);
  will-change: transform, opacity;

  @media (--screen-small) {
    margin-top: 20px;
    margin-left: -10px;
  }

  &--visible {
    animation: messageSlideIn 0.4s cubic-bezier(.25,1.3,.86,1.07) forwards;
  }

  &__avatar {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    align-self: flex-end;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--color-bg-third);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #595D6F;

    @media (--screen-mobile) {
      width: 30px;
      height: 30px;
    }

    img {
      width: 66%;
      transform: translateX(1px);

      @media (--screen-retina) {
        transform: none;
      }
    }
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3px;
    background-color: var(--color-bg-secondary);
    border-radius: 10px;
    padding: 10px 14px 20px 14px;
    font-size: 12px;
    color: var(--color-text-main);
    border: 1px solid #222222;

    /* Add rounded outer bubble corner at left-bottom */
    &::before {
      content: '';
      position: absolute;
      left: -10px;
      bottom: -1.8px;
      width: 16.2px;
      height: 16.83px;
      background-image: url('~/assets/images/tg-message-corner.png');
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        left: -10.5px;
      }
    }
  }

  &__title {
    color: #AC60FD;
    font-weight: 800;
  }

  &__code {
    font-size: 12px;
    color: var(--color-text-third);
    font-family: var(--font-mono);
    background-color: #171717;
    padding: 3px 6px;
    border-radius: 4px;
    margin: 4px 0;

    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__link {
    color: #3184E2;
    text-decoration: underline;
  }

  &__time {
    color: var(--color-text-third);
    font-style: italic;
    font-size: 11px;
    position: absolute;
    right: 14px;
    bottom: 4px;
  }
}
</style>
