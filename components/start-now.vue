<template>
  <div class="start-now">
    <h2>Начните сейчас</h2>
    <div class="start-now__text">
      Зарегистрируйтесь
      <span class="start-now__separator">→</span>
      Создайте Воркспейс
      <span class="start-now__separator">→</span>
      Создайте проект и получите токен
      <span class="start-now__separator">→</span>
      Подключите SDK в свой код
    </div>
    <Button
      type="primary"
      size="medium"
      link="https://garage.hawk.so/sign-up?from=landing-bottom"
    >
      Начать улучшать ПО
    </Button>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
@import url('@/assets/styles/variables.pcss');

.start-now {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 140px 0 100px;
  margin-bottom: 80px;
  border-radius: 30px;
  border: 1px solid var(--color-separator);

  @media (--screen-mobile) {
    padding: 100px var(--layout-paddings-appshell) 60px;
    margin-bottom: 40px;
  }

  h2 {
    font-weight: 900;
    font-size: 50px;
    line-height: 1.1;
    color: #fff;
  }

  &__text {
    color: var(--color-text-secondary);
    font-size: 15px;
    margin: 50px 0 70px;

    a {
      color: inherit;
      text-decoration: underline;
    }

    @media (--screen-mobile) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

  }

  &__separator {
    @media (--screen-mobile) {
      transform: rotate(90deg);
    }
  }
}
</style>
