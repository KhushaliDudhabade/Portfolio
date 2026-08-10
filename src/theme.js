import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Accent palette shared across skill/project cards so colors stay consistent
export const accents = {
  purple: '#A855F7',
  magenta: '#D946EF',
  cyan: '#22D3EE',
  green: '#34D399',
  blue: '#3B82F6',
  orange: '#F59E0B',
};

export const getTheme = (mode) =>
  responsiveFontSizes(createTheme({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            primary: { main: '#A855F7' },
            secondary: { main: '#22D3EE' },
            background: { default: '#0C0B1E', paper: '#14132C' },
            text: { primary: '#F1EFFF', secondary: '#9C99BE' },
          }
        : {
            primary: { main: '#7c3aed' },
            secondary: { main: '#a855f7' },
            background: { default: '#f5f0ff', paper: '#ffffff' },
            text: { primary: '#1a1a2e', secondary: '#4a4a6a' },
          }),
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 500 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { textTransform: 'none', fontWeight: 600, borderRadius: 8 },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: 16 },
        },
      },
    },
  }));
