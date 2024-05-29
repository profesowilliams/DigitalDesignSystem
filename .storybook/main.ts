// .storybook/main.ts

import { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: [
    "../src/stories/html/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  refs: {
    lit: {
      title: "Lit",
      url: "http://localhost:6008/",
      expanded: false, // Optional, true by default
    },
    react: {
      title: "React",
      url: "http://localhost:6007/",
      expanded: false, // Optional, true by default
    },
  },

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/html-vite",
    options: {},
  },

  docs: {}
};

export default config;
