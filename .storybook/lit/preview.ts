import { addons } from '@storybook/preview-api';
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED } from '@storybook/core-events';

import '../../src/scss/index.scss';

import './docs-root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import type { Preview } from '@storybook/web-components';

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
    html: {
      root: '#root-inner',
      removeComments: true,
      removeEmptyComments: true,
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: 'strict',
      },
      highlighter: {
        showLineNumbers: true, // default: false
        wrapLines: false, // default: true
      },
    },
  },

  tags: ['autodocs'],
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
