import React from "react";

const AuthForm = ({ type }) => {
  const isSignup = type === "signup";

  return (
    <div className="form-page">
      <h1 className="form-heading">{isSignup ? "Sign Up" : "Sign In"}</h1>
      <div className="form-container">
        {isSignup && <input type="text" placeholder="Username" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>{isSignup ? "Sign Up" : "Sign In"}</button>
      </div>
    </div>
  );
};

export default AuthForm;
