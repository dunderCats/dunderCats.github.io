import React, { useState } from "react";
import "./MembersGallery.scss";
import Sacoya from "../profilePhotos/Sacoya.png";
import Farjana from "../profilePhotos/Farjana.png";
import Imane from "../profilePhotos/Imane.png";
import Tunisia from "../profilePhotos/Tunisia.png";
import Samira from "../profilePhotos/Samira.png";
import Rosie from "../profilePhotos/Rosie.png";
import Xani from "../profilePhotos/Xani.png";
import Ethan from "../profilePhotos/Ethan.png";
import Leo from "../profilePhotos/Leo.png";
import Dan from "../profilePhotos/Dan.png";
import Valerie from "../profilePhotos/Valerie.png";
import Nicole from "../profilePhotos/Nicole.png";
import Reid from "../profilePhotos/Reid.png";
import Caridad from "../profilePhotos/Caridad.png";
import Mel from "../profilePhotos/Mel.png";
import Karina from "../profilePhotos/Karina.png";
import Rob from "../profilePhotos/Rob.png";

export const MembersGallery = () => {
  const members = [
    {
      member_id: 1,
      first_name: "Sacoya",
      photo: <img src={Sacoya} alt="Sacoya" />,
      quote: "Favorite quote: Life is a journey, live it to the fullest"
    },
    {
      member_id: 2,
      first_name: "Farjana",
      photo: <img src={Farjana} alt="Farjana" />,
    },
    {
      member_id: 3,
      first_name: "Imane",
      photo: <img src={Imane} alt="Imane" />,
    },
    {
      member_id: 4,
      first_name: "Tunisia",
      photo: <img src={Tunisia} alt="Tunisia" />,
    },
    {
      member_id: 5,
      first_name: "Samira",
      photo: <img src={Samira} alt="Samira" />,
    },
    {
      member_id: 6,
      first_name: "Rosie",
      photo: <img src={Rosie} alt="Rosie" />,
    },
    {
      member_id: 7,
      first_name: "Xani",
      photo: <img src={Xani} alt="Xani" />,
    },
    {
      member_id: 8,
      first_name: "Ethan",
      photo: <img src={Ethan} alt="Ethan" />,
    },
    {
      member_id: 9,
      first_name: "Leo",
      photo: <img src={Leo} alt="Leo" />,
    },
    {
      member_id: 10,
      first_name: "Dan",
      photo: <img src={Dan} alt="Dan" />,
    },
    {
      member_id: 11,
      first_name: "Valerie",
      photo: <img src={Valerie} alt="Valerie" />,
    },
    {
      member_id: 12,
      first_name: "Nicole",
      photo: <img src={Nicole} alt="Nicole" />,
    },
    {
      member_id: 13,
      first_name: "Reid",
      photo: <img src={Reid} alt="Reid" />,
    },
    {
      member_id: 14,
      first_name: "Caridad",
      photo: <img src={Caridad} alt="Caridad" />,
    },
    {
      member_id: 15,
      first_name: "Mel",
      photo: <img src={Mel} alt="Mel" />,
    },
    {
      member_id: 16,
      first_name: "Karina",
      photo: <img src={Karina} alt="Karina" />,
    },
    {
      member_id: 17,
      first_name: "Rob",
      photo: <img src={Rob} alt="Rob" />,
    },
  ];

  const selectRandomMember = () => {
    const randomMemberIndex = [Math.floor(Math.random() * members.length)];
    const randomMember = members[randomMemberIndex];
    alert(`The turn is for ${randomMember.first_name}`)
    ;
  };
  const [searchQuery, setSearchQuery] = useState("");
  const filterMembers = members.filter((member) =>
    member.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="MembersGallery">
      <div className="selectAddSearch">
        <button id="select" onClick={selectRandomMember}>
          Select
        </button>
        <button id="add">Add</button>
        <input
          placeholder="Search a member"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid">
        {filterMembers.map((member) => (
          //This connects the photos with the div
          <div className="grid_item">
            <div className="flip-card-inner">  
            <div className="flip-card-front">  
            {member.photo}
            </div>
            <div className="flip-card-back">  
            {member.first_name}
            <div>{member.quote}</div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
