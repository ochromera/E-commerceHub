import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { App } from './App.jsx';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev/index.js';
import { theme } from './theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
          <App />
        </DevSupport>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
