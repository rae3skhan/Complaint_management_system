import React, { useState } from "react";
const Login = () => {
  let [login, setLogin]=useState({
        email:"",
        password:"",
  });
  let handleInput = (e) => {
    let { name, value }=e.target;
    setLogin((prev) => 
      ({ ...prev, [name]:value })
    );

  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted :"+login.email+" password:"+login.password,);

    setLogin({
          password:"",
          email:"",
    });
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          onChange={handleInput}
          value={login.email}
        />
        <input
          type="password"
          name="password"
          value={login.password}
          placeholder="Enter your password..."
          onChange={handleInput}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
