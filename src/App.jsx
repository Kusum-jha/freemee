import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import Home from "./components/Home";
import ChatBot from "./components/ChatBot";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(null); // null, "signup", or "signin"

  return (
    <div className="app-container">
      <Navbar
        onSignupClick={() => setShowForm("signup")}
        onSigninClick={() => setShowForm("signin")}
      />
      <div className="main-content">
        {showForm ? <AuthForm type={showForm} /> : <Home />}
      </div>
      <ChatBot />
    </div>
  );
}

export default App;
