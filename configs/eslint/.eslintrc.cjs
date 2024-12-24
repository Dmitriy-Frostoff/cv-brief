/**
 * use the commands below when ESLint v9.+ will be released and it will support ESModules!
 *
 * @example
 *  import path from 'path';
 *  const __dirname = import.meta.dirname;
 *
 *  project: path.resolve(__dirname, 'configs/ts/tsconfig.json'),
 */

const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
    es2024: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.js'],
      extends: ['airbnb-base', 'prettier'],
    },
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: path.resolve(__dirname, '../ts/tsconfig.json'),
        ecmaVersion: 'latest',
      },
    },
    {
      env: {
        mocha: true,
        jest: true,
      },
      files: ['**/*.test.js'],
      extends: ['airbnb-base', 'prettier'],
    },
    {
      env: {
        mocha: true,
        jest: true,
      },
      files: ['**/*.test.ts', 'jest-setup.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/dom',
        'prettier',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: path.resolve(__dirname, '../ts/tsconfig.json'),
        ecmaVersion: 'latest',
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off', // check https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md about that
  },
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
};
