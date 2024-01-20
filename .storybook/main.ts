export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],

  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  core: {
    builder: '@storybook/builder-vite',
  },

  features: {
    storyStoreV7: true,
  },

  docs: {
    autodocs: true,
    toc: true,
  },
};
