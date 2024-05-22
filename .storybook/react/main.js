/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
  stories: [
    "../../src/components/react/**/*.mdx",
    "../../src/components/react/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
