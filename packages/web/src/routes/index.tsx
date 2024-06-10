import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { loginPath, registerPath, rootPath } from '../constants/paths';
import { AuthProvider } from '../context/AuthContext';
import PrivateRoute from '../components/PrivateRoute';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path={rootPath} element={<PrivateRoute component={HomePage} />} />
        <Route path={registerPath} element={<RegisterPage />} />
        <Route path={loginPath} element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>

    
  );
};

export default AppRoutes;

