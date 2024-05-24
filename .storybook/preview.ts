import { addons } from '@storybook/preview-api';
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED, GLOBALS_UPDATED } from '@storybook/core-events';

import type { Preview } from '@storybook/html';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#000c21',
        },
      ],
    },
  },
};

const channel = addons.getChannel();

const setGlobalTheme = (globals) => {
  const currentBackground = globals.backgrounds?.value;
  const theme = currentBackground === '#000c21' ? 'dark' : 'light';

  channel.emit(UPDATE_GLOBALS, {
    globals: {
      ...globals,
      theme: theme,
    },
  });
};

const storyListener = (args) => {
  setGlobalTheme(args.globals);
};

function setupBackgroundListener() {
  channel.removeListener(STORY_ARGS_UPDATED, storyListener);
  channel.addListener(STORY_ARGS_UPDATED, storyListener);
}

function setupGlobalsListener() {
  channel.removeListener(GLOBALS_UPDATED, storyListener);
  channel.addListener(GLOBALS_UPDATED, storyListener);
}

setupBackgroundListener();
setupGlobalsListener();

export default preview;
