<template>
  <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.42524 10.8885L3.21735 13.0746L3.99613 8.39708L0.616738 5.07069L5.30593 4.36593L7.42524 0.124023L9.54454 4.36593L14.2337 5.07069L10.8543 8.39708L11.6331 13.0746L7.42524 10.8885Z"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IconStar',
  props: {
    color: {
      type: String,
      default: '#EEC71C',
    },
  },
});
</script>

<style>

</style>
