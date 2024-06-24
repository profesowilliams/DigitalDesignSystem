import { create, ThemeVars } from '@storybook/theming';

const theme: ThemeVars = create({
  base: 'light',
  brandTitle: 'Digital Design System&nbsp;v1.0',
  brandUrl: 'https://dev.azure.com/techdatacorp/WW%20Digital%20Commerce/_git/DigitalDesignSystem',

  // Toolbar default and active colors
  barSelectedColor: '#0078d4', // use msft primary blue default
  barTextColor: '#222',

  colorPrimary: '#dedede',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e0e0e0', // use msft gray
  appBorderRadius: 4,

  // Typography
  fontBase: '"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;',
  fontCode: 'monospace',

  // Text colors
  textColor: '#11100f',
  textInverseColor: '#0078d4', // use msft primary blue default

  // Form colors
  inputBg: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});

export default theme;
