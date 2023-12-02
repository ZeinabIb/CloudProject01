import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/auth.css"; // Make sure your CSS file path is correct
import blackhole from "../assets/blackhole2.mp4";

const SignUp = () => {
  const initialFormData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: "",
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
      const response = await axios.post(
        "http://localhost:5555/users",
        formData
      );

      setFormData(initialFormData);
    } catch (error) {
      console.error("Error adding user:", error);
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
          <h2 className="signup-heading">Sign Up</h2>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="birthDate"
              placeholder="Birth Date"
              className="date-input"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
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
              Submit
            </button>
            <Link className="auth-link" to="/signin">
              Already have an account? Sign In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
