<template>
  <div
    class="contact-us desktop-only"
    :class="{ 'contact-us--expanded': isExpanded }"
    @click="!isExpanded ? isExpanded = true : void 0;"
  >
    <div class="contact-us__title">
      Есть вопросы?

      <span
        v-show="isExpanded"
        class="contact-us__close"
        @click="closeClick()"
      >
        <IconCross />
      </span>
    </div>
    <div
      v-if="isExpanded"
      class="contact-us__content"
      :class="{ 'contact-us__content--visible': isExpanded }"
    >
      <p>
        Напишите нам на
        <a href="mailto:team@hawk.so"> team@hawk.so</a>
        или в Telegram
        <a href="https://t.me/hawk_tracker">@hawk_tracker</a>.
      </p>
      <p>
        Либо оставьте свой контакт и мы с вами свяжемся:
      </p>
      <form
        v-if="mail === '' || mail === undefined"
        class="contact-us__form bottom-container"
        @submit.prevent="notify(inputData)"
      >
        <div class="frame">
          <input
            required
            class="contact-us__input"
            :value="inputData"
            type="text"
            placeholder="Telegram никнейм или email"
            @input="handleInput"
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
        Спасибо, {{ mail }}, мы свяжемся с вами!
      </div>
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
      isExpanded: false,
    };
  },
  watch: {
    mail(newMail) {
      this.inputData = newMail;
    },
  },
  methods: {
    handleInput(event: Event): void {
      this.inputData = (event.target as HTMLInputElement).value.trim();
    },
    notify(message: string): void {
      if (this.inputData.trim() === '') {
        return;
      }

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
    closeClick(): void {
      requestAnimationFrame(() => {
        this.isExpanded = false;
        console.log('closeClick', this.isExpanded);
      });
      // this.$emit('close');
    },
  },

});
</script>

<style scoped>
@import url('@/assets/styles/variables.pcss');

.contact-us {
  --width: 120px;
  --height: 120px;
  --title-size: 14px;
  --title-align: center;
  --radius: 50%;
  --animation-speed: 0.3s;

  text-align: left;
  padding: 24px 28px;
  border-radius: 21px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: var(--z-header);
  width: var(--width);
  height: var(--height);
  background-color: var(--color-bg-popover);
  color: var(--color-text-main);
  font-size: 16px;
  line-height: 23px;

  border-radius: var(--radius);
  background-color: var(--color-bg-popover);
  color: var(--color-text-main);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: width var(--animation-speed) ease, height var(--animation-speed) ease, border-radius var(--animation-speed) ease;
  will-change: width, height, border-radius;

  background: radial-gradient(112% 112% at 93.2% 3.2%, #6B21CC 0%, #251634 32.79%, #32155E 85.75%, #4A14B0 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  box-shadow: 0px 34px 64px -20px rgba(188, 44, 255, 0.25);

  &--expanded {
    --width: 570px;
    --height: 220px;
    --title-size: 26px;

    --title-align: left;
    cursor: default;
    --radius: 21px;
  }

  &__title {
    font-size: var(--title-size);
    font-weight: bold;
    line-height: 1.4;
    color: var(--color-text-main);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: var(--title-align);
    transition: font-size var(--animation-speed) ease, line-height var(--animation-speed) ease, transform var(--animation-speed) ease;
    will-change: font-size, line-height;
    margin-bottom: 16px;
    transform: translateY(15px);
  }

  &--expanded &__title {
    transform: translateY(0);
  }

  &__close {
    opacity: 0;
    cursor: pointer;
    color: #948AB5;
    animation: fadeIn var(--animation-speed) ease forwards;
    animation-delay: var(--animation-speed);

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

  &__form {
    margin-top: 24px;
  }

  &__content {
    opacity: 0;
    animation: fadeIn var(--animation-speed) ease forwards;
    animation-delay: var(--animation-speed);
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
