<template>
  <div
    class="events-feed"
    :style="{
      '--items-count': `${eventsCount}`,
    }"
  >
    <div
      v-for="(event, index) in events"
      :key="event.message"
      class="events-feed__item"
      :class="{
        'events-feed__item--hovered': event.isHovered,
      }"
      :style="{
        top: `${index * 40}px`,
      }"
    >
      <div class="events-feed__item-left">
        <div class="events-feed__item-left-icon">
          <IconStar
            v-if="event.isStared"
            class="svg-icon"
            aria-hidden="true"
          />
          <IconCheck
            v-else-if="event.isResolved"
            class="svg-icon"
            aria-hidden="true"
          />
          <IconDot v-else />
        </div>

        <div class="events-feed__item-time">
          {{ event.time }}
        </div>

        <div class="events-feed__item-badge-wrapper">
          <div
            class="events-feed__item-badge"
            :class="{
              'events-feed__item-badge--new': event.isNew,
            }"
          >
            {{ event.count }}

            <span class="events-feed__item-badge-users">
              <IconUser />
              {{ event.users }}
            </span>
          </div>
        </div>
      </div>

      <div class="events-feed__item-content">
        {{ event.message }}
      </div>

      <div class="events-feed__item-right">
        <div
          v-if="event.viewedBy && event.viewedBy.length > 0"
          class="events-feed__item-viewed-by"
        >
          <IconEye />
          <UserAva
            v-for="user in event.viewedBy"
            :key="user"
            :user="user"
            :size="12"
            class="viewed-by-user"
          />
        </div>

        <div class="events-feed__item-right-icon">
          <UserAva
            v-if="event.assignee"
            :user="event.assignee"
            :size="18"
          />
          <IconUserPlus v-else />
        </div>

        <div class="events-feed__item-right-icon">
          <IconDots />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface EventItem {
  isStared: boolean;
  isHovered: boolean;
  isResolved: boolean;
  isNew: boolean;
  count: string;
  users: string;
  time: string;
  message: string;
  assignee: number | null;
  viewedBy: number[];
}

export default Vue.extend({
  props: {
    events: {
      type: Array as () => EventItem[],
      required: true,
    },
    eventsCount: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
@import url('@/assets/styles/variables.pcss');
.events-feed {
  --item-height: 40px;
  color: var(--hawk-text-secondary);

  @media (--screen-mobile) {
    --item-height: 36px;
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

/* Animation keyframes for viewed-by users */
@keyframes userFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.events-feed {
  position: relative;
  min-height: calc(var(--items-count) * var(--item-height));
}

.events-feed__item {
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

  @media (--screen-mobile) {
    padding: 5px 8px;
  }

  /* Simple fade-in animation for new items */
  animation: itemFadeIn 0.35s ease-out forwards;

  &--hovered {
    background-color: var(--hawk-color-bg-secondary);
    color: var(--hawk-text-primary);
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

      @media (--screen-mobile) {
        width: 12px;
      }
    }
  }

  &-content {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;

    @media (--screen-mobile) {
      font-size: 12px;
    }
  }

  &-right {
    margin-left: auto;
    gap: 8px;

    @media (--screen-mobile) {
      gap: 2px;
    }

    &-icon {
      width: 18px;
      display: flex;
      justify-content: center;

      @media (--screen-mobile) {
        transform: scale(0.8);
      }
    }
  }

  &-viewed-by {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-right: 12px;

    .viewed-by-user {
      animation: userFadeIn 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  }

  &-time {
    font-weight: 500;
    font-size: 10.1px;
    line-height: 1em;
    text-align: center;
    width: 36px;

    @media (--screen-mobile) {
      display: none;
    }
  }

  &-badge-wrapper {
    min-width: 96px;
    display: flex;
    justify-content: flex-start;

    @media (--screen-mobile) {
      min-width: 60px;
    }
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

    @media (--screen-mobile) {
      font-size: 8px;
      padding: 2px 3px;
      gap: 4px;
      border-radius: 4px;
    }

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

      @media (--screen-mobile) {
        font-size: 8px;
        gap: 2px;

        svg {
          width: 6px;
        }
      }
    }
  }
}
</style>
