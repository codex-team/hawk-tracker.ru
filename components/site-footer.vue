<template>
  <div class="footer">
    <div class="footer__inner">
      <div class="footer__inner-text-1">
        Hawk
      </div>
      <div class="footer__inner-text-2">
        © 2018—2024
      </div>
      <a href="https://codex.so/hawk-overview">О проекте</a>
      <a href="https://docs.hawk.so/hawk">Документация</a>
      <a href="/pricing.pdf" target="_blank">Цены</a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss">
@import url('@/assets/styles/variables.pcss');
.footer {
  display: flex;
  align-items: center;
  justify-content: center;

  &__inner {
    display: flex;
    margin: 120px 0;
    border-radius: 14px;
    padding: 10px 20px;
    gap: 20px;
    background: #242936;

    color: #DBE6FF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;

    @media (--screen-mobile) {
      display: grid;
      grid-template-columns: repeat(2, auto);
    }

    &-text-1 {
      font-weight: 700;
    }

    &-text-2 {
      color: rgba(219, 230, 255, 0.60);
    }
  }
}
</style>
