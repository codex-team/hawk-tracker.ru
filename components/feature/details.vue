<template>
  <div class="feature-details">
    <FeatureTitle
      title="Детализация инцидента"
      description="Поможет локализовать и воспроизвести ошибку"
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
          label: 'Post params',
          labelIcon: null,
          rows: [
            {
              title: 'order_id',
              type: 'string',
              value: '9cf42186722aae8962d2f0261355edb67aebd993',
            },
            {
              title: 'order',
              type: 'json',
              value: {
                data: [ {
                  type: 'newOrder',
                  data: {
                    id: '#19123',
                    amount: 2100,
                    currency: 'RUB',
                  },
                } ],
              },
            },
          ],
        },
        {
          label: 'Vue',
          labelIcon: vueSvg,
          rows: [
            {
              title: 'Component',
              type: 'component',
              value: '<PurchaseButton />',
            },
            {
              title: 'Lifecycle',
              type: 'string',
              value: 'v-on handler',
            },
            {
              title: 'Data',
              type: 'json',
              value: {
                paymentMethod: 'card',
                amount: 100,
                currency: 'USD',
              },
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

<style>
@import '~/assets/styles/variables.pcss';

.feature-details {
  padding: var(--layout-paddings-grid);

  .feature-title {
    margin-bottom: 25px;
  }
}

</style>
