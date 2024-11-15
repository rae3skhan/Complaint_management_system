import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication logic
    if (email === 'admin@example.com' && password === 'admin') {
      login({ role: 'admin' });
      navigate('/');
    } else if (email === 'superadmin@example.com' && password === 'superadmin') {
      login({ role: 'super-admin' });
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#4ADE80] from-50% to-gray-100 to-50% font-serif">
      <h2 className="mb-10 fs-3 md:mb-5 sm:mb-1 text-white">
        Complaint Management System
      </h2>
      <form
        className="bg-white shadow-lg p-3 mb-5 bg-body-tertiary rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-5 font-bold fs-4">Login</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;