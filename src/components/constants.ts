const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  FILLED: 'filled',
  TERTIARY: 'tertiary',
  LINK: 'link',
  AFFIRMATIVE: 'affirmative',
  DESTRUCTIVE: 'destructive',
};

const bgs = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
};

const horizontals: (boolean | string)[] = [true, 'sm', 'md', 'lg', 'xl', 'xxl'];

const placements = {
  AUTO_START: 'auto-start',
  AUTO: 'auto',
  AUTO_END: 'auto-end',
  TOP_START: 'top-start',
  TOP: 'top',
  TOP_END: 'top-end',
  RIGHT_START: 'right-start',
  RIGHT: 'right',
  RIGHT_END: 'right-end',
  BOTTOM_END: 'bottom-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  LEFT_END: 'left-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
};

export { variants, bgs, horizontals, placements };
