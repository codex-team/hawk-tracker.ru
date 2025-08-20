<template>
  <div class="sentry-code-container">
    <pre class="sentry-code"><span class="sentry-code__comment">/**
 * Хоук поддерживает формат Sentry.
 * Вам не придется менять уже интегрированные Sentry SDK.
 * Просто поменяйте DSN в конфиге.
 */</span>
<span class="sentry-code__token">import</span> <span class="sentry-code__string">*</span> <span class="sentry-code__token">as</span> Sentry <span class="sentry-code__token">from</span> <span class="sentry-code__string">'@sentry/browser'</span>;

Sentry.<span class="sentry-code__method">init</span>({
<div class="sentry-code__removed-line">- dsn: 'https://1234567890abcdef1234567890abcdef@o123456.ingest.sentry.io/9876543',</div><div class="sentry-code__added-line">+ dsn: 'https://3c59d1984e6646849ff59cd5e230627f7385883f29c645ae8e2a94afb2b8a281@k1.hawk.so/0'</div>  <span class="sentry-code__comment">// ...</span>
});</pre>
  </div>
</template>

<style lang="postcss">
@import url('@/assets/styles/variables.pcss');

.sentry-code-container {
  max-width: fit-content;
  margin: 0 auto;
  background: var(--color-bg-secondary);
  padding: 20px;
  border-radius: 14px;
  display: flex;
  flex-shrink: 0;
  overflow: auto;

  @media (--screen-mobile) {
    margin: 0 var(--layout-paddings-horisontal);
  }
}

.sentry-code {
  max-width: 100%;

  font-size: 13.2px;
  line-height: 1.45em;
  color: var(--color-text);
  font-family: var(--font-mono);

  @media (--screen-mobile) {
    font-size: 12px;
  }

  &__comment {
    color: var(--color-code-comment);
  }

  &__token {
    color: var(--color-code-token);
  }

  &__string {
    color: var(--color-code-string);
  }

  &__method {
    color: var(--color-code-method);
  }

  &__added-line {
    color: var(--color-code-added-line-text);
    background: var(--color-code-added-line-bg);
  }

  &__removed-line {
    color: var(--color-code-removed-line-text);
    background: var(--color-code-removed-line-bg);
  }
}
</style>
