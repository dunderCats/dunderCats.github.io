import React from "react";
import './HomePage.scss'
import DDImage from "./DDLogo.png"

export const NavBar = () => {
  return (
    <div className="NavBar">
      <button id="logo">
        <img src={DDImage} alt='Logo'/>
      </button>
      <button>About</button>
      <button>Contact</button>
      <button>Login</button>
    </div>
  );
};
