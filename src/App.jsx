import { useState } from 'react'
import Dashboard from './Component/Admin/Dashbaord'
import SAdashboard from './Component/SAadmin.jsx/SAdashbaord'


function App() {
  const[user, setUser] = useState('super-admin')
  return (
    <>
    {user === 'super-admin' ? <SAdashboard /> :  <Dashboard />}
    </>
  )
}

export default App
