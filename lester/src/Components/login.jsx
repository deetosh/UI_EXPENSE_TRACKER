import React, { useState } from "react";
import "./AllCSS/login.css"; // Import your CSS file for styles

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully!");
      // Add your form submission logic here (e.g., API call)
    }
  };

  return (
    <div className="form-container">
      <p className="title">Welcome back</p>
      <form className="form" onSubmit={handleSubmit}>
        {/* Email Field */}
        <input
          type="email"
          className={`input ${errors.email ? "error" : ""}`}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        {/* Password Field */}
        <input
          type="password"
          className={`input ${errors.password ? "error" : ""}`}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        {/* Confirm Password Field */}
        <input
          type="password"
          className={`input ${errors.confirmPassword ? "error" : ""}`}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <p className="error-message">{errors.confirmPassword}</p>
        )}

        {/* Forgot Password Link */}
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>

        {/* Submit Button */}
        <button type="submit" className="form-btn">
          Log in
        </button>
      </form>

      {/* Sign Up Link */}
      <p className="sign-up-label">
        Don't have an account? <span className="sign-up-link">Sign up</span>
      </p>
    </div>
  );
};

export default LoginForm;