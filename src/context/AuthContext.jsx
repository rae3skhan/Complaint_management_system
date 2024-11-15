import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const login = (userData) => {
    const user = users.find(u => u.email === userData.email && u.password === userData.password);
    if (user) {
      setUser(user);
    } else {
      alert('Invalid credentials');
    }
  };

  const register = (userData) => {
    setUsers([...users, userData]);
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