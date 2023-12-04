import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { theme } from './theme.js';

import './App.css';
import { Navbar } from './components/Navbar.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import Home from './assets/pages/Home.jsx';
import About from './assets/pages/About.jsx';
import Categories from './assets/pages/Categories.jsx';
import Portfolio from './assets/pages/Porfolio.jsx';
import Products from './assets/pages/Products.jsx';
import Users from './assets/pages/Users.jsx';
import Orders from './assets/pages/Orders.jsx';
import ErrorPage from './assets/pages/ErrorPage.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="/redirect" element={<Navigate to="/error-page" />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};
