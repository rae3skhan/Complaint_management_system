import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import SolvedCases from './Component/Tables/SolvedCases.jsx';
import Login from './Component/Login/Login.jsx';
import Complaints from './Component/ComplaintsFolder/Complaints.jsx';
import AddCases from './Component/Tables/AddCases.jsx';
import PendingCases from './Component/Tables/PendingCases.jsx';
import RejectedCases from './Component/Tables/RejectedCases.jsx';
import AdminRequest from './Component/Tables/AdminRequest.jsx';

const ProtectedRoute = ({ element, roles }) => {
  const { user } = useAuth();
  if (!user || !roles.includes(user.role)) {
    return <Navigate to="/login" />;
  }
  return element;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Complaints /> },
      { path: '/add-complaint', element: <ProtectedRoute element={<AddCases />} roles={['admin', 'super-admin']} /> },
      { path: '/solved-complaint', element: <ProtectedRoute element={<SolvedCases />} roles={['admin', 'super-admin']} /> },
      { path: '/pending-complaint', element: <ProtectedRoute element={<PendingCases />} roles={['admin', 'super-admin']} /> },
      { path: '/rejected-complaint', element: <ProtectedRoute element={<RejectedCases />} roles={['admin', 'super-admin']} /> },
      { path: '/admin-request', element: <ProtectedRoute element={<AdminRequest />} roles={['super-admin']} /> },
    ],
  },
  { path: '/login', element: <Login /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
