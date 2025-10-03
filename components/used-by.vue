<template>
  <div class="block-inner-container">
    <div class="used-by">
      <img src="~/assets/svg/used-by/ofd.svg" alt="Платформа ОФД">
      <img src="~/assets/svg/used-by/rocket.svg" alt="Рокетбанк">
      <img src="~/assets/svg/used-by/sovcombank.svg" alt="СОВКОМБАНК">
      <img src="~/assets/svg/used-by/slogy.svg" alt="Слоджи">
      <img src="~/assets/svg/used-by/vc.svg" alt="vc.ru">
      <img src="~/assets/svg/used-by/wazzup.svg" alt="Wazzup">
      <img src="~/assets/svg/used-by/dtf.svg" alt="DTF">
      <img src="~/assets/svg/used-by/stworka.svg" alt="Stworka">
    </div>
  </div>
</template>

<style>
@import url('@/assets/styles/variables.pcss');

.used-by {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;

  @media (--screen-mobile) {
    gap: 30px;

    img {
      max-height: 30px;
    }
  }
}
</style>
