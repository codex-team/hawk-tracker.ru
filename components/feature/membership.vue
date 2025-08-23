<template>
  <div class="feature-details feature-membership">
    <FeatureTitle
      title="Настройка доступа"
      description="Добавляйте разработчиков и других членов команды"
    />

    <div class="team">
      <div class="team__form">
        <div class="team__form-item">
          <div class="team__label">
            Invite by email
          </div>
          <div class="team__form-item-input">
            antonio@cdx.so
          </div>
        </div>
        <div class="team__form-item">
          <div class="team__label">
            Invite by link
          </div>
          <div class="team__form-item-input">
            https://app.hawk.so/join/7201836
          </div>
        </div>
      </div>
      <div class="team__label team__label--list">
        Team
      </div>
      <div class="team__list">
        <div class="team__list-contextmenu">
          <span class="team__list-contextmenu-corner" />
          <div class="team__list-contextmenu-item">
            Grant admin
          </div>
          <div class="team__list-contextmenu-item">
            Remove
          </div>
        </div>
        <div
          v-for="member in team"
          :key="member.email"
          class="team__list-item"
        >
          <UserAva
            v-if="member.id"
            :user="member.id"
            :size="16"
            class="team__list-item-ava"
          />
          <img
            v-else
            src="~/assets/svg/user.svg"
            :size="16"
          >
          <div class="team__list-item-body">
            <span class="team__list-item-name">
              {{ member.email }}
            </span>
            <span v-if="member.isYou" class="team__list-item-notice">
              (you)
            </span>
            <span v-if="member.isPending" class="team__list-item-notice">
              (Invatation sent)
            </span>

            <span v-if="member.isAdmin" class="team__list-item-role">
              Admin
            </span>

            <div class="team__list-item-actions">
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
import UserAva from '../user-ava.vue';
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
      team: [
        {
          id: 3,
          email: 'john.doe@cdx.so',
          isYou: true,
          isAdmin: true,
          isPending: false,
        },
        {
          id: 2,
          email: 'antonio.rinaldi@cdx.so',
          isYou: false,
          isAdmin: false,
          isPending: false,
        },
        {
          id: null,
          email: 'mickael@cdx.so',
          isYou: false,
          isAdmin: false,
          isPending: true,
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

.feature-membership {
  background: linear-gradient(180deg, #000000 0%, #101117 100%);
}

.team {
  display: flex;
  flex-direction: column;

  &__label {
    font-size: 12px;
    color: rgba(167, 167, 167, 0.59);

    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.15px;
    text-transform: uppercase;

    &--list {
      margin-top: 22px;
      margin-bottom: 4px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 22px;

    &-item {
      &-input {
        padding: 10px 12px;
        background: #0A0A0B;
        border: 1px solid #2C2C2C;
        border-radius: 10px;
        font-size: 13px;
        color: #8B8B8B;
        margin-top: 9px;
        line-height: 16px;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 16px;
    margin-right: 120px;
    position: relative;
    letter-spacing: 0.15px;

    &-item {
      display: flex;
      align-items: center;
      gap: 10px;
      max-width: 100%;

      &-body {
        padding: 10px 0;
        flex: 1;
        display: flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
      }

      &:not(:last-child) &-body{
        border-bottom: 1px solid #31333A;
      }

      &-ava {
        flex-shrink: 0;
      }

      &-name {
        color: var(--hawk-text-primary);
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100%;
      }

      &-notice {
        color: var(--hawk-text-secondary);
      }

      &-role {
        color: #2CCF6C;
        margin-left: auto;
      }

      &-actions {
        margin-left: auto;
      }

      &-role + &-actions {
        margin-left: 12px;
      }
    }

    &-contextmenu {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%) translateX(calc(100% + 20px));

      background: linear-gradient(180deg, #434343 0%, #1B1A1A 100%);
      box-shadow: 0px 19px 33px #000000;
      border-radius: 10px;
      padding: 4px 12px;
      min-width: 100px;

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

      &-item {
        padding: 8px 0;
        font-size: 11px;
        line-height: 13px;
        color: var(--color-text-secondary);

        &:not(:last-child) {
          border-bottom: 1px solid var(--color-separator);
        }
      }

      &-corner {
        position: absolute;
        top: 50%;
        right: calc(100%-6.2px);
        transform: translateY(-50%) rotate(45deg);
        width: 12px;
        height: 12px;
        background: linear-gradient(180deg, rgb(53,53,53) 0%, rgb(42,42,42) 100%);

        &::before {
          content: '';
          position: absolute;
          top: -1px;
          right: -1px;
          left: 1px;
          bottom: 1px;
          background: #090909;
        }
      }
    }
  }
}

</style>
