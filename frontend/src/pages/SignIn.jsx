import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/auth.css";
import blackhole from "../assets/blackhole2.mp4";
import { useAuth } from "./components/AuthProvider";

const SignIn = () => {
  const { login } = useAuth();

  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your authentication route
      login(formData);
      // Handle the authentication success, e.g., store token in local storage

      // Redirect to a new page or update the UI accordingly
    } catch (error) {
      // Handle authentication failure, e.g., display an error message
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="full-width-container">
      <div className="bg">
        <div className="video-container">
          <video className="video-tag" autoPlay loop muted>
            <source src={blackhole} type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </div>
      </div>
      <div className="content">
        <div className="form-container">
          <h2 className="signup-heading">Sign In</h2>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            <button className="signup-button" type="submit">
              Continue
            </button>
            <Link className="auth-link" to="/signup">
              Don't have an account? Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
