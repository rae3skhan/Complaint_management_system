import { useState } from 'react';
import Dashboard from './Component/Admin/Dashbaord';
import SAdashboard from './Component/SAadmin.jsx/SAdashbaord';
import { useAuth } from './context/AuthContext';

function App() {
  const { user } = useAuth();

  return (
    <>
      {user?.role === 'super-admin' ? <SAdashboard /> : <Dashboard />}
    </>
  );
}

export default App;
