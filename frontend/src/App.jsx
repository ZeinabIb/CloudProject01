import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import AudioProvider from "./pages/components/AudioProvider";
import { AuthProvider } from "./pages/components/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AudioProvider>
        {({ handleToggleAudio, isMuted }) => (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        )}
      </AudioProvider>
    </AuthProvider>
  );
}

export default App;
