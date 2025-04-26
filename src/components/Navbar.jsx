import React from "react";

const Navbar = ({ onSignupClick, onSigninClick }) => {
  return (
    <header className="navbar">
      <div className="title">Free Me</div>
      <div className="nav-buttons">
        <button onClick={onSignupClick}>Signup</button>
        <button onClick={onSigninClick}>Signin</button>
      </div>
    </header>
  );
};

export default Navbar;
