<template>
  <div class="feature-feed">
    <div class="feature-feed__container">
      <FeatureTitle
        title="Отслеживайте ошибки"
        description="Работает поиск, сортировка по количеству или затронутым пользователям, добавление в избранное, пометки исправления"
      />

      <div class="p-feed">
        <div class="p-feed__tabs">
          <div class="p-feed__tabs-left">
            <IconFilter />
            <span class="p-feed__tabs-item p-feed__tabs-item--active">All</span>
            <span class="p-feed__tabs-item">Favorited</span>
            <span class="p-feed__tabs-item">Resolved</span>
            <span class="p-feed__tabs-item">Unresolved</span>
            <span class="p-feed__tabs-item">Ignored</span>
          </div>

          <div class="p-feed__tabs-right">
            <IconSort />
            <span class="p-feed__tabs-item p-feed__tabs-item--active">By time</span>
            <span class="p-feed__tabs-item">By count</span>
            <span class="p-feed__tabs-item">By users</span>
          </div>
        </div>

        <div class="p-feed__search">
          <IconSearch />
          ⌘+K to search
          <IconCrossSmall />
        </div>

        <div class="p-feed__day">
          Today
        </div>

        <div
          ref="elementRef"
          class="p-feed__list"
        >
          <EventsFeed
            :events="visibleEvents"
            :events-count="events.length"
          />
        </div>
      </div>
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
          assignee: null,
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
          assignee: 1,
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
        {
          isStared: false,
          isHovered: false,
          isResolved: false,
          isNew: false,
          count: '1 072',
          users: '301',
          time: '10:12',
          message: 'Installed GD does not support webp images',
          assignee: null,
          viewedBy: [],
        },
        {
          isStared: false,
          isHovered: false,
          isResolved: true,
          isNew: false,
          count: '1403',
          users: '98',
          time: '09:12',
          message: 'Cannot read property \'lastElementChild\' of undefined',
          assignee: null,
          viewedBy: [],
        },
        {
          isStared: false,
          isHovered: false,
          isResolved: false,
          isNew: false,
          count: '922',
          users: '101',
          time: '08:12',
          message: 'The play method is not allowed by the user agent or the platform in the current context of the document.',
          assignee: null,
          viewedBy: [],
        },
        {
          isStared: false,
          isHovered: false,
          isResolved: false,
          isNew: false,
          count: '782',
          users: '10',
          time: '07:12',
          message: 'can\'t access property "isDisabledAd", v.value is undefined',
          assignee: null,
          viewedBy: [],
        },
      ],
      visibleEvents: [] as any[],
    };
  },
  watch: {
    isVisible(newValue) {
      if (newValue && this.visibleEvents.length === 0) {
        this.startAddingEvents();
      }
    },
  },
  methods: {
    startAddingEvents() {
      let currentIndex = this.events.length - 1;

      const addNextEvent = () => {
        if (currentIndex >= 0) {
          this.visibleEvents.unshift(this.events[currentIndex]);
          currentIndex--;

          if (currentIndex >= 0) {
            const randomDelay = Math.random() * 450 + 150; // Random delay between 150-550ms

            requestAnimationFrame(() => {
              setTimeout(addNextEvent, randomDelay);
            });
          } else {
            // All events added, start viewed-by animation
            setTimeout(() => {
              this.startViewedByAnimation();
            }, 100);
          }
        }
      };

      addNextEvent();
    },

    startViewedByAnimation() {
      // Take 2 random events from visible events
      const selectedEvents = this.shuffleArray([ ...this.visibleEvents ]).slice(0, 2);

      // Define which users should be added to each event
      const eventUsers = [
        {
          eventMessage: selectedEvents[0]?.message,
          users: [1, 2],
        },
        {
          eventMessage: selectedEvents[1]?.message,
          users: [ 3 ],
        },
      ];

      // Filter out events that don't exist
      const validEventUsers = eventUsers.filter(item => item.eventMessage);

      if (validEventUsers.length === 0) {
        return;
      }

      // Get all users from selected events
      const allUsers = validEventUsers.flatMap(item =>
        item.users.map((user: number) => ({
          user,
          eventMessage: item.eventMessage,
        }))
      );

      // Shuffle users
      const shuffledUsers = this.shuffleArray([ ...allUsers ]);

      // Start adding users one by one
      let userIndex = 0;
      const addNextUser = () => {
        if (userIndex < shuffledUsers.length) {
          const userData = shuffledUsers[userIndex];
          const eventMessage = userData.eventMessage;

          // Find the event in visibleEvents
          const event = this.visibleEvents.find(e => e.message === eventMessage);

          if (event) {
            // Add user to the event's viewed-by list
            event.viewedBy.push(userData.user);
          }

          userIndex++;

          if (userIndex < shuffledUsers.length) {
            const randomDelay = Math.random() * 400 + 200; // Random delay between 200-600ms

            setTimeout(addNextUser, randomDelay);
          }
        }
      };

      // Start after a short delay
      setTimeout(addNextUser, 300);
    },

    shuffleArray(array: any[]) {
      const shuffled = [ ...array ];

      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return shuffled;
    },
  },
});
</script>

<style>
@import url('@/assets/styles/variables.pcss');
.feature-feed {
  --padding: var(--layout-paddings-horisontal);

  padding: 56px var(--padding) var(--padding) var(--padding);

  height: 606px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  background: linear-gradient(180deg, #25272C 0%, #0D1015 100%);

  &__container {
    max-width: var(--layout-features-wide-content-width);
  }

   &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 20%;
    background: linear-gradient(180deg, #71778900 0%, #020303 100%);
  }
}

.p-feed {
  color: var(--hawk-text-secondary);
  background-color: #111319;
  padding: 14px;
  border-radius: 16px 16px 0 0;
  margin-top: 50px;
  --item-height: 40px;

  @media (--screen-mobile) {
    margin: 20px 0 0;
  }

  &__tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13.2px;

    .svg-icon {
      margin-right: 6px;
    }

    &-left,
    &-right {
      display: flex;
      align-items: center;
      gap: 3px;
    }

    &-item {
      border-radius: 5px;
      padding: 2px 7px;

      &--active {
        background-color: var(--hawk-color-bg-secondary);
        color: var(--hawk-text-primary);
      }

      @media (--screen-mobile) {
        font-size: 11px;

        &:last-of-type,
        &:nth-of-type(3),
        &:nth-of-type(4) {
          display: none;
        }
      }
    }
  }

  &__search {
    --bg: #0E0E11;

    display: flex;
    align-items: center;
    gap: 2px;
    padding: 9px 14px;
    background-color: var(--bg);
    border-radius: 10px;
    margin: 14px 0;

    background-color: var(--bg);
    box-shadow: inset 3px 8px 14px rgba(0, 0, 0, 0.11);
    border: 1px solid transparent;
    background-image:
        linear-gradient(var(--bg), var(--bg)),
        linear-gradient(to bottom, #080809, #1C1F2C);
      background-origin: border-box;
      background-clip: padding-box, border-box;

    @media (--screen-mobile) {
      font-size: 12px;
      padding: 6px 10px;
    }

    svg:last-of-type {
      margin-left: auto;
    }
  }

  &__day {
    font-size: 13px;
    color: var(--hawk-text-secondary);
    margin-bottom: 14px;
  }

}

</style>
