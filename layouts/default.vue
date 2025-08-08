<template>
  <div>
    <site-header />
    <Nuxt />
    <site-footer />
  </div>
</template>

<script>
import Vue from 'vue';
import SiteFooter from '~/components/site-footer.vue';
import SiteHeader from '~/components/site-header.vue';

export default Vue.extend({
  components: {
    SiteHeader,
    SiteFooter,
  },
});
</script>

<style>

</style>
