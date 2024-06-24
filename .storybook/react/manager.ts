import { addons } from '@storybook/manager-api';
import webcomponentsTheme from './theme';

addons.setConfig({
  previewTabs: {
    canvas: { hidden: true },
  },
  enableShortcuts: false,
  sidebar: {
    showRoots: true,
  },
  theme: webcomponentsTheme,
});
