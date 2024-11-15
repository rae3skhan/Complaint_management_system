import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    try {
      console.log('Attempting to log in with:', userData);
      const response = await axios.post('http://localhost:5000/login', userData);
      setUser(response.data);
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
  };

  const register = async (userData) => {
    try {
      console.log('Attempting to register with:', userData);
      await axios.post('http://localhost:5000/register', userData);
      console.log('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error);
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