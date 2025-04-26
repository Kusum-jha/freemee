import React from "react";

function Navbar({ onSignupClick, onSigninClick }) {
  return (
    <nav className="navbar">
      <div className="logo">Free Me</div>
      <div className="nav-links">
        <button onClick={onSignupClick}>Signup</button>
        <button onClick={onSigninClick}>Signin</button>
      </div>
    </nav>
  );
}

export default Navbar;
