<template>
  <div :class="['box', inputActive && 'box__active']">
    <div class="contact">
      <div :class="[`div-${$props.titleSize}`, `div`, inputActive && 'div__active']">
        {{ $props.title }}
      </div>
      <p :class="['team-hawk-so-t-me', inputActive && 'team-hawk-so-t-me__active']">
        Чтобы начать сотрудничество или получить больше информации, напишите нам на
        <a href="mailto:team@hawk.so"> team@hawk.so</a>
        или в телеграм
        <a href="https://t.me/hawk_tracker">t.me/hawk_tracker</a>.
        <br>
        <span class="text-wrapper">
          Либо оставьте телеграм или имейл:
        </span>
      </p>
      <form
        v-if="mail === '' || mail === undefined"
        class="bottom-container"
        @submit.prevent="notify(inputData)"
      >
        <div class="frame">
          <input
            required
            :value="inputData"
            :class="['input-style', inputActive && 'input-style-active']"
            type="text"
            placeholder="Telegram или email"
            @input="inputData = $event.target.value"
          >
        </div>
        <button class="div-wrapper">
          <div class="text-wrapper-3">
            Получить информацию
          </div>
        </button>
      </form>
      <div
        v-else
        class="bottom-container, bottom-container__text"
      >
        Спасибо, мы свяжемся с вами в Telegram или по почте <b>{{ mail }}</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contact',
  props: {
    title: {
      type: String,
    },
    inputActive: {
      type: Boolean,
    },
    titleSize: {
      type: String,
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

.box {
  max-width: 620px;
  display: flex;
  justify-content: center;
  margin: 20px auto;

  &__active {
    max-width: 560px;
  }
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
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

.div {
  color: #f2f6ff;
  font-weight: 700;
  margin-bottom: 20px;
  white-space: nowrap;

  &__active {
    color: #DBE6FF;
  }

  &-medium {
    font-size: 36px;

    @media (--screen-mobile) {
      font-size: 26px;
    }
  }

  &-small {
    font-size: 26px;

    @media (--screen-mobile) {
      font-size: px;
    }
  }
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

.div-wrapper {
  cursor: pointer;
  align-items: center;
  border-width: 0px;
  background-color: #0d75d4;
  border-radius: 8px;
  gap: 10px;
  padding: 10px 12px;
  box-shadow: none;

  @media (--screen-mobile) {
    text-align: start;
  }

  &:hover {
    background-color: #0b64b7;
  }
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
