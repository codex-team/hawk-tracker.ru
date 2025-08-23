module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'codex',
  ],
  rules: {
    'jsdoc/require-returns': 'off',
    'no-irregular-whitespace': 'off',
    'import/named': 'off',
  },
};
