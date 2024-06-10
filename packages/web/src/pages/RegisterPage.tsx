import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

import RegisterForm from "../components/RegisterForm";
import AuthContext from "../context/AuthContext";
import { BASE_URL } from '../constants';
import { RegisterFormType } from "../types";
import { rootPath } from "../constants/paths";

const RegisterPage = () => {
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

  const handleRegister = async (data: RegisterFormType) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError({ message: errorData.message });
        throw new Error(errorData.message);
      }

      const userData = await response.json();
      login(userData);
    } catch (error) {
      setError({ message: error.message });
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center flex-col">
      <RegisterForm onSubmit={handleRegister} />
      {error && <p className="text-red-500 text-xl italic text-center">{error.message}</p>}
    </div>
  );
};

export default RegisterPage;
