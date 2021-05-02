import { transparentize } from 'polished';

const colors = {
  green_light: '#DAF2E4',
  green: '#32b768',
  green_dark: '#2b7a4b',

  heading: '#52665a',
  body_dark: '#5C6660',
  body_light: '#aab2ad',

  background: '#ffffff',
  shape: '#f0f0f0',
  white: '#ffffff',
  gray: '#cfcfcf',

  blue: '#3d7199',
  blue_light: '#ebf6ff',

  red: '#e83f5b',

  placeholder: transparentize(0.5, '#5C6660'),
} as const;

export { colors };
