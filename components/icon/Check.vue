<template>
  <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.42524" cy="7.5163" r="7.15888" :fill="colorBg" />
    <path
      d="M6.62751 10.5018L3.73486 7.60913L4.45785 6.88614L6.62751 9.0558L10.2431 5.44017L10.9661 6.16315L6.62751 10.5018Z"
      :fill="colorFg"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IconStar',
  props: {
    colorBg: {
      type: String,
      default: '#2CCF6C',
    },
    colorFg: {
      type: String,
      default: '#fff',
    },
  },
});
</script>

<style>

</style>
