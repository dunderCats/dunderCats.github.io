import React from "react";
import './HomePage.scss'

export const NavBar = () => {
  return (
    <div className="NavBar">
      <button id="logo">
        <img src='directorydice\src\Pages\DDLogo.png' alt='Logo'/>
      </button>
      <button>About</button>
      <button>Contact</button>
      <button>Login</button>
    </div>
  );
};
