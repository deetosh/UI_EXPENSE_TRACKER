import React from "react";
import "../AllCSS/login.css"; 
import { Outlet, Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="form-container">
      <p className="title">Welcome back</p>
      <form className="form">
      <input type="email" className="input" placeholder="First Name" />
      <input type="email" className="input" placeholder="Last Name" />
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <button type="submit" className="form-btn">
            Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginForm;