// .storybook/main.ts
import { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: ['../../src/pages/html/**/*.mdx', '../../src/pages/html/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))'],
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

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/html-vite',
    options: {},
  },

  docs: {},
};

export default config;
