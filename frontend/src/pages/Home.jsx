import React, { useEffect, useRef, useState } from "react";
import blackhole from "../assets/blackhole.mp4";
import "./styles/font.css";
import { Link } from "react-router-dom";
import { useAuth } from "./components/AuthProvider";

const Home = () => {
  const { authenticated, logout } = useAuth();
  return (
    <>
      <div style={styles.bg}>
        <div style={styles.videoContainer}>
          <video style={styles.videoTag} autoPlay loop muted>
            <source src={blackhole} type="video/mp4" />
          </video>
          <div style={styles.overlay}></div>
        </div>
      </div>
      <div style={styles.content}>
        <h1 className="title">
          Operation <p style={styles.gold}>ArcLight</p>
        </h1>
        <div style={styles.text}>
          <h3>
            "Exploration is wired into our brains. If we can see the horizon, we
            want to know what's beyond."
          </h3>
          <h3>
            <p style={{ textDecoration: "underline", display: "inline" }}>
              Beyond the Stars:
            </p>{" "}
            Your Ticket to Extraterrestrial Adventures!
          </h3>
        </div>
        {authenticated ? (
          <button style={styles.signupButton} onClick={logout}>
            Logout
          </button>
        ) : (
          <div style={styles.buttonContainer}>
            <button style={styles.signInButton}>
              <Link style={{ color: "#ffcd59" }} to="/signin">
                Sign In
              </Link>
            </button>
            <button style={styles.signupButton}>
              <Link style={{ color: "black" }} to="/signup">
                Sign Up
              </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  videoContainer: {
    position: "absolute",
    zIndex: "-1",
  },

  videoTag: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    margin: "50px",
    zIndex: "1",
    color: "white",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "80px",
    background: "linear-gradient(to bottom, transparent, black)",
  },

  bg: {
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    left: "0",
    top: "0",
    zIndex: "-1",
    backgroundColor: "black",
    height: "100vh",
  },
  audioButton: {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
  buttonContainer: {
    marginTop: "50px",
  },

  signInButton: {
    outline: "none",
    fontSize: "1.2rem",
    marginRight: "15px",
    fontWeight: "bold",
    backgroundColor: "black",
    padding: "10px 20px",
    border: "2px solid black",
    cursor: "pointer",
    boxShadow: "0px 0px 8px rgba(217,131,65, 1)",
  },

  signupButton: {
    outline: "none",
    fontSize: "1.2rem",
    backgroundColor: "#ffcd59",
    fontWeight: "bold",
    color: "black",
    padding: "10px 20px",
    cursor: "pointer",
  },
  text: {
    maxWidth: "700px",
    fontSize: "1.2rem",
  },
  gold: {
    color: "#ffcd59",
    display: "inline",
    textShadow: "2px 2px 2px rgba(217,131,65, 0.3)",
  },
};

export default Home;
