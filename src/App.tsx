import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PartsOrderPage from './pages/PartsOrderPage';
import MainLayout from './components/layout/MainLayout';
import PartsMenuPage from './pages/menus/PartsMenuPage';
import ProductsMenuPage from './pages/menus/ProductsMenuPage';
import CommonMenuPage from './pages/menus/CommonMenuPage';
import MasterMenuPage from './pages/menus/MasterMenuPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/parts/menu" replace />} />
          <Route path="/home" element={<HomePage />} />
          
          {/* Menu Pages */}
          <Route path="/parts/menu" element={<PartsMenuPage />} />
          <Route path="/products/menu" element={<ProductsMenuPage />} />
          <Route path="/common/menu" element={<CommonMenuPage />} />
          <Route path="/master/menu" element={<MasterMenuPage />} />

          {/* Existing Routes */}
          <Route path="/parts/order" element={<PartsOrderPage />} />
          
          {/* Redirect unmatched routes to parts menu */}
          <Route path="*" element={<Navigate to="/parts/menu" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;