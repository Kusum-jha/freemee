import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import Home from "./components/Home";
import ChatBot from "./components/ChatBot";
import "./App.css";
import "./components/ChatBot.css"; 

function App() {
  const [showForm, setShowForm] = useState(null); // null, "signup", or "signin"

  return (
    <div className="app-container">
      <Navbar 
        onSignupClick={() => setShowForm("signup")} 
        onSigninClick={() => setShowForm("signin")} 
      />
      <div className="content">
        {showForm ? <AuthForm type={showForm} /> : <Home />}
      </div>

      {/* 👇 Floating chatbot visible on all views */}
      <ChatBot />
    </div>
  );
}

export default App;
