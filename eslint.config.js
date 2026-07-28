import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // React
      'react/react-in-jsx-scope': 'off',

      // Hooks
      ...reactHooks.configs.recommended.rules,

      // Загальні правила
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      eqeqeq: 'error',
    },
  },

  prettier,
];
