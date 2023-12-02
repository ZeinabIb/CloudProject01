// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigateTo = useNavigate();
  const login = async ({ email, password }) => {
    try {
      // Make a request to your server for authentication
      const response = await axios.post("http://localhost:5555/users/login", {
        email,
        password,
      });

      // If the authentication is successful, set authenticated to true
      if (response.status === 200) {
        setAuthenticated(true);
        localStorage.setItem("token", response.data.token);
        navigateTo("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
      // Handle login error, e.g., display an error message
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
