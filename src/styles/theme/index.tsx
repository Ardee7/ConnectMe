import { DefaultTheme } from 'react-native-paper';
import { DefaultTheme as navDefaultTheme } from '@react-navigation/native';

export const navigationTheme = {
  ...navDefaultTheme,
  colors: {
    ...navDefaultTheme.colors,
    primary: '#2D9C8F', // Teal from the logo
    accent: '#FFC857', // Mustard Yellow for accents
    background: '#EAEAEA', // Light Gray for backgrounds
    surface: '#FFFFFF', // White for surfaces
    text: '#4A4A4A', // Gray for readable text
    secondaryText: '#333333', // Charcoal for stronger text contrast
    error: '#FF6B6B', // Coral for error messages or warnings
    notification: '#FF6B6B' // Coral for notifications (optional)
  }
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2D9C8F', // Teal from the logo
    accent: '#FFC857', // Mustard Yellow for accents
    background: '#EAEAEA', // Light Gray for backgrounds
    surface: '#FFFFFF', // White for surfaces
    text: '#4A4A4A', // Gray for readable text
    secondaryText: '#333333', // Charcoal for stronger text contrast
    error: '#FF6B6B' // Coral for error messages or warnings
  }
};
