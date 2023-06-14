import React from "react";
import './HomePage.scss'
import DDImage from "./DDLogo.png"
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <button id="logo"><Link to='/'><img src={DDImage} alt='Logo'/></Link>{' '}</button>
      <button><Link to='/about'>About</Link>{' '}</button>
      <button><Link to='/contact'>Contact</Link>{' '}</button>
      <button><Link to='/login'>Login</Link>{' '}</button>
      <button><Link to='/membersgallery'>MembersGallery</Link>{' '}</button>
    </div>
  );
};

