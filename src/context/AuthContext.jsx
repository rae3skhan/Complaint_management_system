import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    try {
      const response = await axios.post('http://localhost:5000/login', userData);
      setUser(response.data);
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  const register = async (userData) => {
    try {
      await axios.post('http://localhost:5000/register', userData);
    } catch (error) {
      alert('Registration failed');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);