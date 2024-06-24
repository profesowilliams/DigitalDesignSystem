import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../../src/components/react/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
        configFile: process.env.NODE_ENV === 'development' ? 'chromatic.config.react.json' : 'production.config.react.json',
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
