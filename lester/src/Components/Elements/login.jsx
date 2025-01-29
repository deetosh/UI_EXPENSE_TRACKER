import React from "react";
import "../AllCSS/login.css";
import { Outlet, Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="form-container">
      <p className="title">Welcome back</p>
      <form className="form">
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button type="submit" className="form-btn">
          Log in
        </button>
      </form>
      <p className="sign-up-label">
        Don't have an account? <span className="sign-up-link">Sign up</span>
      </p>
    </div>
  );
};

export default LoginForm;