import React from "react";

function AuthForm({ type }) {
  return (
    <div className="auth-form">
      <h2>{type === "signup" ? "Sign Up" : "Sign In"}</h2>
      <input type="text" placeholder="Username" />
      {type === "signup" && <input type="email" placeholder="Email" />}
      <input type="password" placeholder="Password" />
      <button>{type === "signup" ? "Sign Up" : "Sign In"}</button>
    </div>
  );
}

export default AuthForm;
