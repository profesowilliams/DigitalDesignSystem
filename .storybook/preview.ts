import { addons } from '@storybook/addons';
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED } from '@storybook/core-events';
import 'bootstrap/scss/bootstrap.scss';

export default {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#1D3152',
        },
      ],
    },
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const channel = addons.getChannel();

const storyListener = (args) => {
  if (args.args.theme) {
    const theme = args.args.theme;
    const background = theme === 'light' ? 'light' : 'dark';

    channel.emit(UPDATE_GLOBALS, {
      globals: {
        theme,
        backgrounds: {
          name: background,
          value: background === 'light' ? '#FFFFFF' : '#1D3152',
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
