import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Optional, for dark mode
    primary: {
      main: '#f5f5f5', 
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#f5f5f5', // Set icon color to white smoke
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '#root': {
          display: 'flex',
          width: '100vw',
        },
        '#folders-container': {
          height: '100vh',
          overflowY: 'auto',
          width: '21vw',
          transition: '0.5s', 
        },
        '#cookbook-container': {
          width: '21vw',
          transition: 'margin-left .5s, 0.5s',
        },
        '#recipe-detail-container': {
          width: '58vw',
          backgroundColor: 'rgb(0, 106, 106)',
          transition: '0.5s',
        },
        '#hide-sidebar-btn': {
          position: 'fixed',
          left: '0',
          top: '0',
          margin: '10px',
        },
        body: {
          margin: '0',
        },
        button: {
          transition: 'border-color 0.25s',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
