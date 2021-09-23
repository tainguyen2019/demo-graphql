import { createTheme } from '@mui/material';

const white = '#FFFFFF';
const black = '#000000';

const theme = createTheme({
  palette: {
    common: {
      black,
      white,
    },
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#FFA726',
    },
    info: {
      main: white,
    },
  },
});

export default theme;
