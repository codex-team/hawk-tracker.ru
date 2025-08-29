<template>
  <div class="contextmenu">
    <span
      class="contextmenu__corner"
      :class="{
        'contextmenu__corner--top-right': cornerPosition === 'top-right',
        'contextmenu__corner--left-center': cornerPosition === 'left-center',
      }"
    />
    <div
      v-if="withSearch"
      class="contextmenu__search"
    >
      <IconSearch />
      ⌘+K to search
      <IconCrossSmall />
    </div>
    <div
      v-for="item in items"
      :key="item.label"
      class="contextmenu__item"
    >
      <UserAva
        v-if="item.userAva"
        :user="item.userAva"
        :size="16"
      />
      {{ item.label }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<{
        label: string;
        userAva?: number;
      }[]>,
      required: true,
    },
    cornerPosition: {
      type: String as PropType<'top-right' | 'left-center'>,
      default: 'left-center',
    },
    withSearch: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style>
.contextmenu {
  position: absolute;

  background: linear-gradient(180deg, #434343 0%, #1B1A1A 100%);
  box-shadow: 0px 19px 33px #000000;
  border-radius: 10px;
  padding: 4px 12px;
  min-width: 100px;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-radius: 9px;
    background: #090909;
    z-index: -1;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    font-size: 11px;
    line-height: 13px;
    color: var(--color-text-secondary);

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-separator);
    }
  }

  &__corner {
    position: absolute;

    transform: rotate(45deg);
    margin-top: -6px;
    width: 12px;
    height: 12px;

    &::before {
      content: '';
      position: absolute;
      background: #090909;
    }

    &--top-right {
      top: 0;
      right: 20px;
      background: #434343;

      &::before {
        top: 1px;
        right: -1px;
        left: 1px;
        bottom: -1px;
      }
    }

    &--left-center {
      top: 50%;
      right: calc(100% - 6.2px);
      background: linear-gradient(180deg, rgb(53,53,53) 0%, rgb(42,42,42) 100%);

      &::before {
        top: -1px;
        right: -1px;
        left: 1px;
        bottom: 1px;
      }
    }

  }

  &__search {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 11px;
    line-height: 13px;
    border: 1px solid #2C2C2C;
    border-radius: 6px;
    padding: 5px;
    color: #414141;
    margin: 7px 0;

    svg {
      width: 13px;
      height: 13px;
      color: #3C3C3C;

      &:last-of-type {
        margin-left: auto;
      }
    }
  }
}
</style>
