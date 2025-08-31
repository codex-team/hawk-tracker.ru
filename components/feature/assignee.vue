<template>
  <div class="feature-details feature-assignee">
    <FeatureTitle
      title="Назначайте ответственных"
      description="Определяйте, кто занимается исправлением ошибки"
    />

    <div class="feature-assignee__events">
      <EventsFeed
        :events="events"
        :events-count="events.length"
      />
      <ContextMenu
        :items="[
          { label: 'jonh.doe@cdx.so', userAva: 3 },
          { label: 'antonio.rinaldi@cdx.so', userAva: 2 },
        ]"
        corner-position="top-right"
        with-search
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useIntersectionObserver } from '~/composables/useIntersectionObserver';

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
      events: [
        {
          isStared: true,
          isHovered: true,
          isResolved: false,
          isNew: true,
          count: '5 631',
          users: '3 212',
          time: 'now',
          message: 'Cannot read properties of undefined (reading \'default\')',
          assignee: 1,
          viewedBy: [],
        },
        {
          isStared: true,
          isHovered: false,
          isResolved: false,
          isNew: false,
          count: '4 212',
          users: '2 123',
          time: 'now',
          message: 'Uncaught Error: Can not find a Block from this child Node',
          assignee: null,
          viewedBy: [],
        },
        {
          isStared: false,
          isHovered: false,
          isResolved: false,
          isNew: false,
          count: '1 212',
          users: '352',
          time: '15:34',
          message: 'Argument 1 passed to Kohana_Upload::type() must be of ...',
          assignee: null,
          viewedBy: [],
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

.feature-assignee {
  display: flex;
  height: 100%;
  flex-direction: column;
  background: linear-gradient(180deg, #0F0F13 0%, #0C0C0C 100%), #000000;

  @media (--screen-mobile) {
    height: 340px;
  }

  &__events {
    position: relative;
  }

  .contextmenu {
    top: calc(100% - 40px);
    right: 23px;
    min-width: 190px;

    @media (--screen-mobile) {
      top: calc(100% - 30px);
      right: 11px;
      min-width: auto;
    }
  }
}
</style>
