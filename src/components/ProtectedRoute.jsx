import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    // Redirect to login page
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRoute; 