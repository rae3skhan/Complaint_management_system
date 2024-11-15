import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ email, password, role });
    navigate('/login');
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
        <h1 className="mb-5 font-bold fs-4">Register</h1>
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
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            className="form-control"
            id="role"
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="admin">Admin</option>
            <option value="super-admin">Super-Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;