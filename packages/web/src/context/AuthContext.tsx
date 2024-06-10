import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginPath, rootPath } from '../constants/paths';
import { User } from '../types';

interface AuthContextProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  getToken: () => string;
}


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }:  { children: ReactNode }) => {
  const loggedUser: User | null = JSON.parse(localStorage.getItem('user') as string) || null;
  const [user, setUser] = useState<User | null>(loggedUser);
  const navigate = useNavigate();
  
  useEffect(() => {
    const loggedUser = localStorage.getItem('user');

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));

    navigate(rootPath);
  };

  const getToken = () => {
    const loggedUser = localStorage.getItem('user');

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }

    return `Bearer ${user?.token}`;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');

    navigate(loginPath);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
