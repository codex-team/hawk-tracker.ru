<template>
  <div class="feature-details">
    <FeatureTitle
      title="Кастомные поля"
      description="Прикрепляйте информацию о пользователе и другие данные"
    />
    <FeatureSections :sections="sections" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useIntersectionObserver } from '~/composables/useIntersectionObserver';
import vueSvg from '~/assets/svg/vue.svg';

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
      sections: [
        {
          label: 'Context',
          labelIcon: null,
          rows: [
            {
              title: 'User',
              type: 'user',
              value: {
                email: 'john.doe@gmail.com',
                id: 2,
              },
            },
            {
              title: 'Order',
              type: 'json',
              value: {
                items: [ {
                  id: 'Basket #19123',
                  amount: 2100,
                } ],
              },
            },
            {
              title: 'Previous Page',
              type: 'string',
              value: 'https://myapp.io/order/19123',
            },
          ],
        },
      ],
    };
  },
  methods: {
  },
});
</script>
