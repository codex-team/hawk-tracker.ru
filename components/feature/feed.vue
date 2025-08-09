<template>
  <div class="feature-feed">
    <div class="feature-feed__container">
      <FeatureTitle
        title="Отслеживайте ошибки"
        description="Работает поиск, сортировка по количеству или затронутым пользователям, добавление в избранное, пометки исправления"
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
          <div
            v-for="(event, index) in visibleEvents"
            :key="event.message"
            class="p-feed__item"
            :class="{
              'p-feed__item--hovered': event.isHovered,
            }"
            :style="{
              top: `${index * 40}px`,
            }"
          >
            <div class="p-feed__item-left">
              <div class="p-feed__item-left-icon">
                <img
                  v-if="event.isStared"
                  class="svg-icon"
                  src="~/assets/svg/star.svg"
                  aria-hidden="true"
                >
                <img
                  v-else-if="event.isResolved"
                  class="svg-icon"
                  src="~/assets/svg/check-circle.svg"
                  aria-hidden="true"
                >
                <IconDot v-else />
              </div>

              <div class="p-feed__item-time">
                {{ event.time }}
              </div>

              <div class="p-feed__item-badge-wrapper">
                <div
                  class="p-feed__item-badge"
                  :class="{
                    'p-feed__item-badge--new': event.isNew,
                  }"
                  xw
                >
                  {{ event.count }}

                  <span class="p-feed__item-badge-users">
                    <IconUser />
                    {{ event.users }}
                  </span>
                </div>
              </div>
            </div>

            <div class="p-feed__item-content">
              {{ event.message }}
            </div>

            <div class="p-feed__item-right">
              <div
                v-if="event.viewedBy && event.viewedBy.length > 0"
                class="p-feed__item-viewed-by"
              >
                <IconEye />
                <UserAva
                  v-for="user in event.viewedBy"
                  :key="user"
                  :user="user"
                  size="12"
                />
              </div>

              <div class="p-feed__item-right-icon">
                <UserAva
                  v-if="event.assignee"
                  :user="event.assignee"
                  size="18"
                />
                <IconUserPlus v-else />
              </div>

              <div class="p-feed__item-right-icon">
                <IconDots />
              </div>
            </div>
          </div>
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
          viewedBy: [1, 2],
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
          viewedBy: [ 3 ],
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
          count: '1 012',
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
          count: '1 212',
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
          count: '1 012',
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
          }
        }
      };

      addNextEvent();
    },
  },
});
</script>

<style>
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
    max-width: 847px;
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

/* Animation keyframes for simple fade-in */
@keyframes itemFadeIn {
  from {
    opacity: 0;
    transform: scaleX(1.1);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.p-feed {
  color: var(--hawk-text-secondary);
  background-color: #111319;
  padding: 14px;
  border-radius: 16px 16px 0 0;
  margin-top: 50px;
  --item-height: 40px;

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
  }

  &__day {
    font-size: 13px;
    color: var(--hawk-text-secondary);
    margin-bottom: 14px;
  }

  &__list {
    position: relative;
    min-height: 400px;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 10px 14px;
    border-radius: 10px;
    gap: 10px;
    position: absolute;
    left: 0;
    right: 0;
    height: var(--item-height);
    transition: top 0.3s ease-out;

    /* Simple fade-in animation for new items */
    animation: itemFadeIn 0.35s ease-out forwards;

    &--hovered {
      background-color: var(--hawk-color-bg-secondary);
    }

    &-left,
    &-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &-left {
      &-icon {
        width: 18px;
        display: flex;
        justify-content: center;
      }
    }

    &-content {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-right {
      margin-left: auto;
      gap: 8px;

      &-icon {
        width: 18px;
        display: flex;
        justify-content: center;
      }
    }

    &-viewed-by {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-right: 12px;
    }

    &-time {
      font-weight: 500;
      font-size: 10.1px;
      line-height: 1em;
      text-align: center;
      width: 36px;
    }

    &-badge-wrapper {
      min-width: 96px;
      display: flex;
      justify-content: flex-start;
    }

    &-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 6px;
      padding: 5px 8px;
      background-color: var(--hawk-color-bg-secondary);
      color: var(--hawk-text-secondary);
      font-weight: 800;
      font-size: 10.2px;
      line-height: 1em;

      &--new {
        background-color: var(--hawk-color-signal);
        color: var(--hawk-text-primary);
      }

      &-users {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 500;
        font-size: 10.1px;
        opacity: 0.7;
      }
    }
  }
}

</style>
