import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'

import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/default/theme';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);