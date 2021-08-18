import { createMuiTheme } from '@material-ui/core';
import { Shadows } from '@material-ui/core/styles/shadows';

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
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(155,169, 204, 0.2),0px 1px 1px 0px rgba(155,169, 204,0.14),0px 1px 3px 0px rgba(155,169, 204,0.12)',
    '0px 3px 1px -2px rgba(155,169, 204,0.2),0px 2px 2px 0px rgba(155,169, 204,0.14),0px 1px 5px 0px rgba(155,169, 204,0.12)',
    '0px 3px 3px -2px rgba(155,169, 204,0.2),0px 3px 4px 0px rgba(155,169, 204,0.14),0px 1px 8px 0px rgba(155,169, 204,0.12)',
    '0px 2px 4px -1px rgba(155,169, 204,0.2),0px 4px 5px 0px rgba(155,169, 204,0.14),0px 1px 10px 0px rgba(155,169, 204,0.12)',
    '0px 3px 5px -1px rgba(155,169, 204,0.2),0px 5px 8px 0px rgba(155,169, 204,0.14),0px 1px 14px 0px rgba(155,169, 204,0.12)',
    '0px 3px 5px -1px rgba(155,169, 204,0.2),0px 6px 10px 0px rgba(155,169, 204,0.14),0px 1px 18px 0px rgba(155,169, 204,0.12)',
    '0px 4px 5px -2px rgba(155,169, 204,0.2),0px 7px 10px 1px rgba(155,169, 204,0.14),0px 2px 16px 1px rgba(155,169, 204,0.12)',
    '0px 5px 5px -3px rgba(155,169, 204,0.2),0px 8px 10px 1px rgba(155,169, 204,0.14),0px 3px 14px 2px rgba(155,169, 204,0.12)',
    '0px 5px 6px -3px rgba(155,169, 204,0.2),0px 9px 12px 1px rgba(155,169, 204,0.14),0px 3px 16px 2px rgba(155,169, 204,0.12)',
    '0px 6px 6px -3px rgba(155,169, 204,0.2),0px 10px 14px 1px rgba(155,169, 204,0.14),0px 4px 18px 3px rgba(155,169, 204,0.12)',
    ...Array(15).fill('none'),
  ] as Shadows,
});
