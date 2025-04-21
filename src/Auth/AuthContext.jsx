
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const checkAuthStatus = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/account`, { withCredentials: true });
      setIsAuthenticated(res.data.data?.email !== null && res.data.data?.email !== undefined);
    } catch {
      setIsAuthenticated(false);
    }
  };

  const logout = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true });
    navigate('/');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    checkAuthStatus();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
