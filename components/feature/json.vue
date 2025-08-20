<template>
  <div
    class="f-json"
  >
    {
    <div
      v-for="key in Object.keys(json)"
      :key="`root-${key}`"
      class="f-json__key"
    >
      <span class="f-json__key-name">{{ key }}:</span>

      <template v-if="isObject(json[key])">
        <FeatureJson :json="json[key]" />
      </template>

      <template v-else-if="isArray(json[key])">
        <div class="f-json__array">
          <div class="f-json__array-bracket">
            [
          </div>
          <FeatureJson
            v-for="value in json[key]"
            :key="`${key}-${value}`"
            :json="value"
          />
          <div class="f-json__array-bracket">
            ]
          </div>
        </div>
      </template>

      <template v-else-if="isString(json[key])">
        <span class="f-json__string">{{ `"${json[key]}"` }}</span>
      </template>

      <template v-else-if="isNumber(json[key])">
        <span class="f-json__number">{{ json[key] }}</span>
      </template>

      <template v-else-if="isBoolean(json[key])">
        <span class="f-json__boolean">{{ json[key] }}</span>
      </template>

      <template v-else>
        {{ json[key] }}
      </template>
    </div>
    }
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    json: {
      type: Object as PropType<Record<string, unknown>>,
      required: true,
    },
  },

  methods: {
    isObject(value: unknown): value is Record<string, unknown> {
      return typeof value === 'object' && value !== null && value !== undefined && !Array.isArray(value);
    },
    isArray(value: unknown): value is unknown[] {
      return Array.isArray(value);
    },
    isString(value: unknown): value is string {
      return typeof value === 'string';
    },
    isNumber(value: unknown): value is number {
      return typeof value === 'number';
    },
    isBoolean(value: unknown): value is boolean {
      return typeof value === 'boolean';
    },
  },
});
</script>

<style>
.f-json {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #1a1d26;
  padding: 6px;
  border-radius: 3px;

  &__key {
    display: flex;
    gap: 4px;
    margin-left: 16px;

    &-name {
      color: var(--color-code-token);
    }
  }

  &__value {
    color: var(--hawk-text-primary);
  }

  &__string {
    color: var(--color-code-string);
  }

  &__number {
    color: var(--color-code-object);
  }

  &__boolean {
    color: var(--color-code-method);
  }

  &__array {
    display: flex;
    flex-direction: column;

    & > *:not(.f-json__array-bracket) {
      margin-left: 20px;
    }
  }

}
</style>
