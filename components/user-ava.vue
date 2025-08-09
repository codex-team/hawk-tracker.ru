<template>
  <span
    class="user-ava"
    :style="{
      '--size': `${size}px`,
    }"
  >
    <img
      v-if="user === 1"
      src="~/assets/images/user-ava-1.png"
      alt="user"
    >
    <img
      v-if="user === 2"
      src="~/assets/images/user-ava-2.png"
      alt="user"
    >
    <img
      v-if="user === 3"
      src="~/assets/images/user-ava-3.png"
      alt="user"
    >
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UserAva',
  props: {
    user: {
      type: Number,
      default: 1,
      validator: (value: number) => {
        return [1, 2, 3].includes(value);
      },
    },

    size: {
      type: Number,
      default: 24,
    },
  },
});
</script>

<style>
.user-ava {
  display: inline-flex;
  width: var(--size);
  height: var(--size);
  border-radius: 20%;
  overflow: hidden;

  img {
    width: var(--size);
    height: var(--size);
    border-radius: 20%;
  }
}
</style>
