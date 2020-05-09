import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(
  createMuiTheme({
    spacing: 2,
    palette: {
      type: 'dark',
      primary: {
        light: '#9597a6',
        main: '#292d39',
        dark: '#181c28',
      },
      secondary: {
        light: '#39b6ff',
        main: '#2672b5',
        dark: '#068aff',
      },
      background: {
        paper: '#292d39',
      },
    },
  }),
);

export default theme;
