<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link ? link : undefined"
    :class="['button', `button--${type}`, `button--${size}`]"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    link: {
      type: String,
      default: undefined,
    },
    type: {
      type: String as () => 'primary' | 'secondary',
      required: true,
    },
    size: {
      type: String as () => 'big' | 'medium' | 'small',
      required: true,
    },
  },
  methods: {
    /**
     * Handles click events
     *
     * @param _event
     */
    handleClick(_event: Event): void {
      if (!this.link) {
        this.$emit('click');
      }
    },
  },
});
</script>

<style>
.button {
  --bg-color: var(--color-button-primary);
  --bg-color-hover: var(--color-button-primary-hover);
  --color-border: var(--color-button-primary-border);
  --padding: 10px 20px;
  --font-size: 16px;
  --line-height: 140%;
  --letter-spacing: 0;
  --color: var(--color-button-primary-text);
  --border-radius: 12px;

  display: inline-block;
  text-align: center;
  cursor: pointer;
  text-decoration: none;

  background-color: var(--bg-color);
  color: var(--color);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: var(--padding);
  font-size: var(--font-size);
  font-weight: 500;
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: var(--bg-color-hover);
    border-color: var(--color-border);
  }
}

.button--primary {
  --bg-color: var(--color-button-primary);
  --bg-color-hover: var(--color-button-primary-hover);
  --color-border: var(--color-button-primary-border);
  --color: var(--color-button-primary-text);
}

.button--secondary {
  --bg-color: var(--color-button-secondary);
  --bg-color-hover: var(--color-button-secondary-hover);
  --color-border: var(--color-button-secondary-border);
  --color: var(--color-button-secondary-text);
}

.button--big {
  --padding: 16px 32px;
  --font-size: 18px;
  --line-height: 140%;
  --letter-spacing: 0.02em;
  --border-radius: 14px;
}

.button--medium {
  --padding: 12px 20px;
  --font-size: 14px;
  --line-height: 140%;
  --letter-spacing: 0.02em;
  --border-radius: 12px;
}

.button--small {
  --padding: 8px 16px;
  --font-size: 14px;
  --line-height: 140%;
  --letter-spacing: 0.02em;
  --border-radius: 10px;
}
</style>
