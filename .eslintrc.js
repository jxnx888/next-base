module.exports = {
  extends: [
    'airbnb', // it includes 'eslint:recommended'
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname },
      plugins: ['@typescript-eslint'],
      rules: {
        'jsx-a11y/alt-text': [2, { elements: ['img'] }],
        '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: { delimiter: 'comma', requireLast: true },
          multilineDetection: 'brackets',
          singleline: { delimiter: 'comma', requireLast: false },
        }],
        '@typescript-eslint/type-annotation-spacing': 'error',
      },
      excludedFiles: [
        'tailwind.config.ts',
      ],
    },
    {
      files: ['*.data.ts', '*.data.tsx'],
      rules: {
        'max-len': 'off',
        'no-console': 'off',
        'react/jsx-one-expression-per-line': 'off',
      },
    },
    {
      files: ['*.stories.*'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-param-reassign': 'off',
      },
    },
  ],
  ignorePatterns: ['!**/*', '**/vendors/**', 'jest.config.ts'],
};
