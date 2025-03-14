// .storybook/test-runner.tsx

import { injectAxe, checkA11y, configureAxe } from "axe-playwright";
import { getStoryContext } from "@storybook/test-runner";

/*
 * See https://storybook.js.org/docs/7.0/react/writing-tests/test-runner#test-hook-api-experimental
 * to learn more about the test-runner hooks API.
 */
export default {
  async preRender(page: any) {
    await injectAxe(page);
  },
  async postRender(page: any, context: any) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
