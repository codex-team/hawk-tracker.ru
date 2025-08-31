<template>
  <div
    class="site-header"
    :class="{
      'site-header--menu-showed': mobileMenuShowed
    }"
  >
    <div class="block-inner-container site-header__inner">
      <a
        class="site-header__logo"
        href="/"
      >
        <img
          src="~/assets/images/hawk-logo.png"
          alt="Hawk.so logo"
        >
        Хоук
      </a>
      <div class="site-header__right">
        <div class="site-header__menu">
          <span class="site-header__menu-cross" @click="toggleMobileMenu">
            <IconCross />
          </span>
          <a href="https://codex.so/hawk-overview">О проекте</a>
          <a href="https://docs.hawk-tracker.ru/">Документация</a>
          <a href="/pricing.pdf" target="_blank">Цены</a>
        </div>
        <div class="site-header__menu-separator" />
        <span class="site-header__menu-toggler" @click="toggleMobileMenu">
          Menu
        </span>
        <Button
          type="primary"
          size="small"
          :link="headerSignupButton()"
          class="desktop-only"
        >
          Начать
        </Button>
        <div class="site-header__menu-separator desktop-only" />
        <div class="site-header__menu-social desktop-only">
          <a href="https://github.com/codex-team?q=hawk&type=all&language=&sort=">
            <IconGitHub alt="GitHub logo" />
          </a>
          <a href="https://t.me/hawk_tracker">
            <IconTelegram alt="Telegram logo" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useUTM } from '~/composables/useUTM';

export default Vue.extend({
  data() {
    return {
      /**
       * Visibility state of menu that is hidden on mobile devices by default
       */
      mobileMenuShowed: false,
    };
  },
  computed: {
    /**
     * Signup button URL with UTM tracking
     */
    headerSignupButton() {
      return useUTM('https://garage.hawk.so/sign-up', 'header-signup');
    },
  },
  methods: {
    /**
     * Shows/Hides the mobile menu
     */
    toggleMobileMenu(): void {
      this.mobileMenuShowed = !this.mobileMenuShowed;
    },
  },
});
</script>

<style lang="postcss">
@import url('@/assets/styles/variables.pcss');

  .site-header {
    height: var(--layout-header-height);
    background: var(--color-bg-main);
    color: var(--color-text-main);
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1px solid var(--color-separator);
    position: sticky;
    top: 0;
    z-index: var(--z-header);

    a {
      color: inherit;
      text-decoration: none;
    }

    &__inner {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    &__logo {
      display: flex;
      align-items: center;
      margin-right: 55px;
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.38px;
      text-align: left;

      @media (--screen-mobile) {
        margin-right: 0;
        padding: 15px 0;
      }

      img {
        width: 25.17px;
        margin-right: 10px;
      }
    }

    &__right {
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    &__menu {
      display: flex;
      flex-direction: row;
      flex-shrink: 0;
      align-items: center;
      font-size: 14px;
      line-height: 1.4;
      font-weight: 500;
      gap: 30px;

      @media (--screen-mobile) {
        display: none;
      }

      &-cross {
        float: right;
        width: 40px;
        height: 40px;
        display: none;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        @media (--screen-mobile) {
          display: flex;
        }
      }

      ^&--menu-showed & {
        @media (--screen-mobile) {
          display: block;
          position: fixed;
          top: var(--layout-header-height);
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--color-bg-main);
          z-index: var(--z-header);
          padding: 20px;
          font-size: 20px;
        }
      }

      a {
        display: flex;

        @media (--screen-mobile) {
          display: block;
          padding: 10px 0;
        }

        &:hover {
          color: var(--color-signal);
        }
      }

      &-toggler {
        display: none;
        padding: 10px;

        @media (--screen-mobile) {
          display: flex;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }
      }

      &-social {
        display: flex;
        align-items: center;
        gap: 20px;

        a {
          display: inline-flex;
          color: var(--color-text-secondary);

          &:hover {
            color: var(--color-text-main);
          }
        }
      }

      &-separator {
        width: 1px;
        height: 24px;
        background: var(--color-separator);
        margin: 0 20px;
      }
    }

    &__menu-logo {
      margin-left: auto;

      display: flex;
      align-items: center;
      padding: 7px 14px;
      background: linear-gradient(135deg, #5584F5 0%, #3761E0 100%);
      border-radius: 15px;
      color: #FFFFFF !important;
      font-weight: 600;
      font-size: 14px;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(85, 132, 245, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.12);
      border: 1px solid rgb(21, 56, 127);
      position: relative;

      /* Hover effects */
      &:hover {
        box-shadow: 0 6px 20px rgba(85, 132, 245, 0.4);
        background: linear-gradient(135deg, #4A7BE8 0%, #2F5CD9 100%);
      }

      /* Active state */
      &:active {
        box-shadow: 0 2px 8px rgba(85, 132, 245, 0.3);
      }

      svg {
        width: 16px;
        height: 16px;
        margin-right: 7px;
        transition: transform 0.2s ease;
      }

      &:hover svg {
        transform: scale(1.1);
      }

      @media (--screen-mobile) {
        display: none;
      }
    }
  }
</style>
