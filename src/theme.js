import { createTheme } from '@mui/material';
 export const theme = createTheme({
  palette: {
    primary: {
      main: '#F5F5DC'
    },
    secondary: {
      main: '#F1F1F1',
      dark: '#66606E'
    },
    myCustomColor: {
      red: '#FE5461',
      green: '#29CC97',
      grey: '#56606E',
      greyLight: '#8A909D',
      yellow: '#FEC400',
      blue:'#88AAF3',
      gold:'#DDAA04',
      lightGrey:'#56606E',
      black:'#000000'
    }
  },
  typography: {
    /*fontFamily: ,*/
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
  },
});

