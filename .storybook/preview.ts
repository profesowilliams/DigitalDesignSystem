// import '../dist/lit/lit.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dist/lit/components.js'; // Ensure this path is correct
import '../dist/lit/lit.min.css'; // Ensure this path is correct

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

  tags: ['autodocs']
};

const channel = addons.getChannel();

const storyListener = (args) => {
  if (args.args.theme) {
    const theme = args.args.theme;
    channel.emit(UPDATE_GLOBALS, {
      globals: {
        theme: theme,
        backgrounds: {
          name: theme === 'dark' ? 'dark' : 'light',
          value: theme === 'dark' ? '#000c21' : '#FFFFFF',
        },
      },
    });
  }
};

function setupBackgroundListener() {
  channel.removeListener(STORY_ARGS_UPDATED, storyListener);
  channel.addListener(STORY_ARGS_UPDATED, storyListener);
}

setupBackgroundListener();

export default preview;
