import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from './styles/Theme';

import AppProvider from './hooks';
import Routes from './routes';

const Bootstrap: React.FC = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </AppProvider>
  );
};

export default Bootstrap;
