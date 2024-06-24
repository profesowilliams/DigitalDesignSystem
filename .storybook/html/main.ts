// .storybook/main.ts
import { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: ['../../src/pages/html/**/*.mdx', '../../src/pages/html/**/*.stories.@(js|jsx|mdx|mjs|ts|tsx)'],
  refs: {
    lit: {
      title: 'Lit',
      url: 'http://localhost:6008/',
      expanded: false,
    },
    react: {
      title: 'React',
      url: 'http://localhost:6007/',
      expanded: false,
    },
  },

  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  framework: {
    name: '@storybook/html-vite',
    options: {},
  },

  docs: {},
};

export default config;
