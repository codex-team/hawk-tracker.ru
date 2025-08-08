<template>
  <div class="contact-us desktop-only">
    <div class="contact-us__title">
      Есть вопросы?

      <span
        class="contact-us__close"
        @click="$emit('close')"
      >
        <IconCross />
      </span>
    </div>
    <div class="contact-us__content">
      <p>
        Напишите нам на
        <a href="mailto:team@hawk.so"> team@hawk.so</a>
        или в Telegram
        <a href="https://t.me/hawk_tracker">@hawk_tracker</a>.
      </p>
      <p>
        Либо оставьте свой контакт и мы с вами свяжемся:
      </p>
    </div>
    <form
      v-if="mail === '' || mail === undefined"
      class="bottom-container"
      @submit.prevent="notify(inputData)"
    >
      <div class="frame">
        <input
          required
          class="contact-us__input"
          :value="inputData"
          type="text"
          placeholder="Telegram никнейм или email"
          @input="inputData = $event.target.value"
        >
      </div>
      <Button
        type="primary"
        size="medium"
        @click="notify(inputData)"
      >
        Получить информацию
      </Button>
    </form>
    <div
      v-else
      class="bottom-container, bottom-container__text"
    >
      Спасибо, мы свяжемся с вами в Telegram или по почте <b>{{ mail }}</b>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contact',
  props: {
    inputActive: {
      type: Boolean,
    },
    mail: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inputData: this.mail,
    };
  },
  watch: {
    mail(newMail) {
      this.inputData = newMail;
    },
  },
  methods: {
    notify(message: string): void {
      fetch('https://notify.bot.codex.so/u/U8S04KRK5R51', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          message,
        }),
      })
        .then((_) => {
          this.$emit('update:mail', this.inputData);
        })
        .catch(error => console.error('Error:', error));
    },
  },

});
</script>

<style scoped>
@import url('@/assets/styles/variables.pcss');

.contact-us {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 22px;
  padding: 24px;
  border-radius: 21px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: var(--z-header);
  width: 560px;
  background-color: var(--color-bg-popover);
  color: var(--color-text-main);
  font-size: 16px;
  line-height: 23px;

  &__title {
    font-size: 26px;
    font-weight: bold;
    line-height: 1;
    color: var(--color-text-main);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__close {
    cursor: pointer;
    color: #948AB5;

    &:hover {
      color: var(--color-text-main);
    }
  }

  &__content {
    display: flex;
    flex-direction: column;

    p {
      margin: 0;
    }
  }

  &__input {
    background-color: #120E1E;
    border-radius: 8px;
    padding: 10px 16px;
    font-size: inherit;
    flex: 1;
    border: none;
    outline: none;
    color: var(--color-text-main);

    &::placeholder {
      color: #948AB5;
    }
  }

  &:deep(.button) {
    font-size: inherit;
    border-radius: 8px;
  }

}

.team-hawk-so-t-me {
  display: inline;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: #f2f6ff;
  margin-bottom: 16px;
  word-break: normal;

  &__active {
    color: #DBE6FF;
  }

  @media (--screen-mobile) {
    font-size: 14px;
  }
}

a {
  color: #379fff;
  display: inline;
}

.bottom-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;

  &__text {
    padding: 8px 0;
    color: #2FEF9F;
    line-height: 22px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  @media (--screen-mobile) {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
  }
}

.frame {
  background-color: #252832;
  border-radius: 8px;
  display: flex;
  flex-grow: 1;
}

.input-style {
  background-color: #242832;
  color: #F2F6FF;
  font-weight: 400;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  flex: 1;
  border: none;
  outline: none;

  &-active {
    background-color: #323B4C;
    color: #DBE6FF;

    &::placeholder {
      color: #DBE6FF;
      opacity: 0.6;
    }
  }
}

.text-wrapper-3 {
  cursor: pointer;
  color: #f2f6ff;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
}
</style>
