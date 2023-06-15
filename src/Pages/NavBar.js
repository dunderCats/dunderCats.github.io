import React from "react";
import './NavBar.scss'
import DDImage from "./DDLogo.png"
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <button className="navButton" id="logo"><Link to='/'><img src={DDImage} alt='Logo'/></Link></button>
      <button className="navButton"><Link to='/MembersGallery'>Members Gallery</Link></button>
      <button className="navButton"><Link to='/about'>About</Link></button>
      <button className="navButton"><Link to='/contact'>Contact</Link></button>
      <button className="navButton"><Link to='/login'>Login</Link></button>
      {/* <button className="navButton">Logout</button> */}
      {/* <button><Link to='/membersgallery'>MembersGallery</Link></button> */}
    </div>
  );
};

