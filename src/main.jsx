import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SolvedCases from './Component/Tables/SolvedCases.jsx';
import Login from './Component/Login/Login.jsx';
import Complaints from './Component/ComplaintsFolder/Complaints.jsx';
import AddCases from './Component/Tables/AddCases.jsx';
import PendingCases from './Component/Tables/PendingCases.jsx';
import RejectedCases from './Component/Tables/RejectedCases.jsx';
import AdminRequest from './Component/Tables/AdminRequest.jsx';

const router = createBrowserRouter([
   {path:'/', element: <App />, children:[
    {path:'/', element: <Complaints />},
    {path:'/add-complaint', element: <AddCases />},
    {path:'/solved-complaint', element: <SolvedCases />},
    {path:'/pending-complaint', element: <PendingCases /> },
    {path:'/rejected-complaint', element: <RejectedCases />},
    {path:'/admin-request', element: <AdminRequest />}
   ]},
   {path: '/login', element: <Login />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
