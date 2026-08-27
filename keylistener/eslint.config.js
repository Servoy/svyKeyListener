const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      'only-warn': require('eslint-plugin-only-warn'),
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      quotes: ['warn', 'single', { avoidEscape: true }],
      'max-len': ['warn', { code: 200 }],
      '@angular-eslint/component-class-suffix': 'off',
    },
  },
);
