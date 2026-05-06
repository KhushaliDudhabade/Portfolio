import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            primary: { main: '#64ffda' },
            secondary: { main: '#bb86fc' },
            background: { default: '#0a192f', paper: '#112240' },
            text: { primary: '#ccd6f6', secondary: '#8892b0' },
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
  });
