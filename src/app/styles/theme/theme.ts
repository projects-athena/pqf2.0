'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#161616',
    },
    secondary: {
      main: '#2B2B2B',
    },
    tertiary:{
      main:'#A70038'
    }
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

export default theme;
