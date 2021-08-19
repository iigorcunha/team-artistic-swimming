import { createMuiTheme } from '@material-ui/core';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    greenTag: Palette['primary'];
    redTag: Palette['primary'];
    yellowTag: Palette['primary'];
    blueTag: Palette['primary'];
  }
  interface PaletteOptions {
    greenTag: PaletteOptions['primary'];
    redTag: PaletteOptions['primary'];
    yellowTag: PaletteOptions['primary'];
    blueTag: PaletteOptions['primary'];
  }
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Mundial", "Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: '#759CFC' },
    secondary: { main: '#F4F6FF' },
    text: { secondary: '#9BA9CC' },
    greenTag: { main: '#5ACD76' },
    redTag: { main: '#FF5D48' },
    yellowTag: { main: '#EDAB1D' },
    blueTag: { main: '#59B0FF' },
  },
  shape: {
    borderRadius: 5,
  },
});
