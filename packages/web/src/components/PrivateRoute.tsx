import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';
import { loginPath } from '../constants/paths';

interface PrivateRouteProps {
  component: React.ComponentType<unknown>;
}

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
  const authContext = useContext(AuthContext);
  
  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }


  return authContext.user ? <Component /> : <Navigate to={loginPath} />;
};

export default PrivateRoute;
