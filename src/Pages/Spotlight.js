import React from 'react';
import { useLocation } from "react-router-dom";

const Spotlight = () => {
    const location =useLocation();
    const selectedMember = location.state;

  return (
    <div>
        <h1>Spotlight</h1>
        <img src={selectedMember.photo} alt ={selectedMember.first_name} />
        <h2>{selectedMember.first_name}</h2>
        
        
        
        </div>
  )
}

export default Spotlight;