<template>
  <div class="feature-telemetry">
    <FeatureTitle
      title="Телеметрия"
      description="Будьте в курсе того, что происходит в рантайме"
    />

    <div class="feature-telemetry__image-wrapper">
      <div class="feature-telemetry__image">
        <img src="~/assets/images/telemetry.png" alt="Телеметрия">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="pcss">
.feature-telemetry {
  --padding: var(--layout-paddings-horisontal);
  --image-width: 370px;
  --image-height: 267px;

  padding: 53px calc(var(--image-width) + 10px) var(--padding) var(--padding);
  position: relative;
  height: var(--image-height);
  box-sizing: content-box;
  display: flex;
  align-items: flex-end;

  &__image-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 7px 0 0 0;

    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      z-index: 1;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background: linear-gradient(129deg, #3b3f4b, #3e3e43);

      border-radius: 7px 0 0 0;
    }
  }

  &__image {
    width: var(--image-width);
    height: var(--image-height);
    object-fit: cover;
    border-radius: 7px 0 0 0;
    overflow: hidden;

    img {
      width: 118%;
      z-index: 2;
      position: relative;
      border-radius: 7px 0 0 0;
    }
  }
}
</style>
