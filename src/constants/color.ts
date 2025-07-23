import { useColorScheme } from 'react-native';

const defaultColors = {
  PRIMARY: '#2c3e50',
  SECONDARY: '#6c757d',
  SUCCESS: '#28a745',
  DANGER: '#dc3545',
  WARNING: '#ffc107',
  INFO: '#17a2b8',
  LIGHT: '#f8f9fa',
  DARK: '#343a40',
  WHITE: '#ffffff',
  BORDER: '#e9ecef',
};

const colorsDark = {
  ...defaultColors,
  isDark: true,
  BACKGROUND: 'black',
  TEXT: 'white',
  TEXT_SECONDARY: '#a0a0a0',
  PRIMARY_BACKGROUND: '#F6F9FE',
  CARD_BACKGROUND: '#1e1e1e',
  LIGHT_GRAY: '#5c5e5c',
  GRAY: 'grey',
  // Dashboard specific colors
  REFRESH_TEXT: '#a0a0a0',
  STATUS_OFF: '#6c757d',
  STATUS_ON: '#28a745',
};

const colorsLight = {
  ...defaultColors,
  isDark: false,
  BACKGROUND: 'white',
  TEXT: 'black',
  TEXT_SECONDARY: '#6c757d',
  PRIMARY_BACKGROUND: '#F6F9FE',
  CARD_BACKGROUND: '#ffffff',
  LIGHT_GRAY: '#c1c7c2',
  GRAY: 'grey',
  // Dashboard specific colors
  REFRESH_TEXT: '#6c757d',
  STATUS_OFF: '#6c757d',
  STATUS_ON: '#28a745',
};

export type Colors = typeof colorsDark;

export const useColors = () => {
  const color = useColorScheme();
  return color == 'dark' ? colorsDark : colorsLight;
};