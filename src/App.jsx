import React from 'react';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar.jsx';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar.jsx';
import Home from './assets/pages/Home.jsx';
import About from './assets/pages/About.jsx';
import Categories from './assets/pages/Categories.jsx';
import Portfolio from './assets/pages/Porfolio.jsx';
import Products from './assets/pages/Products.jsx';
import Users from './assets/pages/Users.jsx';
import Orders from './assets/pages/Orders.jsx';
import ErrorPage from './assets/pages/ErrorPage.jsx';

export const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Header />
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
  );
};
