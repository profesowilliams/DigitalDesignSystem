import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../../src/components/Lit/**/*.mdx', '../../src/components/Lit/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))', '../../src/pages/Lit/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))', '../../src/compositions/Lit/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    // Other Storybook addons
    {
      name: '@chromatic-com/storybook',
      options: {
        //👇 Loads the configuration file based on the current environment
        configFile: process.env.NODE_ENV === 'development' ? 'chromatic.config.lit.json' : 'production.config.lit.json',
      },
    },
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },

  staticDirs: [{ from: '../../src/shared', to: '/content/dam/global-shared/' }],

  docs: {}
};
export default config;
