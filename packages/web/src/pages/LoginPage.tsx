import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import { BASE_URL } from '../constants';
import LoginForm from "../components/LoginForm";
import AuthContext from '../context/AuthContext';
import { LoginFormType } from '../types';
import { rootPath } from '../constants/paths';

const LoginPage = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState<{message?: string } | null>(null);

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }


  const { login, user } = authContext;

  if (user?.token) { 
    navigate(rootPath);
  }

  const handleLogin = async (data: LoginFormType) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    try {
      const user = await response.json();
      
      login(user);
    } catch (error) {
      setError(error);
      console.error(error.message);
    }
  };

  return (
    <div className="flex justify-center flex-col">
      <LoginForm onSubmit={handleLogin} />
      {error && <p className="text-red-500 text-xl italic text-center">{error.message as string}</p>}
    </div>
  );
};

export default LoginPage;
