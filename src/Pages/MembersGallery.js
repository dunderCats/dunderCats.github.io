import React from "react";
import "./MembersGallery.scss";

export const MembersGallery = () => {
  const members = [
    { member_id: 1, first_name: "Smith" },
    { member_id: 2, first_name: "Johnson" },
    { member_id: 3, first_name: "Pierre" },
    { member_id: 4, first_name: "Brown" },
    { member_id: 5, first_name: "Green" },
    { member_id: 6, first_name: "Raymond" },
    { member_id: 7, first_name: "Taylor" },
    { member_id: 8, first_name: "Thomas" },
    { member_id: 9, first_name: "Travis" },
    { member_id: 10, first_name: "Polk" },
    { member_id: 11, first_name: "Toussaint" },
    { member_id: 12, first_name: "Charles" },
    { member_id: 13, first_name: "Mier" },
    { member_id: 14, first_name: "Santos" },
    { member_id: 15, first_name: "Matos" },
    { member_id: 16, first_name: "Moore" },
    { member_id: 17, first_name: "Mason" },
  ];

  const selectRandomMember = () => {
    const randomMemberIndex = [Math.floor(Math.random() * members.length)];
    const randomMember = members[randomMemberIndex];
    alert(randomMember.first_name);
    // console.log({ randomMember, members });
  };

  //member_id,first_name,last_name,title,prof_pic
  return (
    <div className="MembersGallery">
      <div className="selectAddSearch">
        <button id="select" onClick={selectRandomMember}>
          Select
        </button>
        <button id="add">Add</button>
        <input placeholder="Search a member" />
      </div>
      <div className="grid">
        {members.map((member) => (
          <div className="grid_item">{member.first_name}</div>
        ))}

        {/* <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div>
        <div className="grid_item"></div> */}
      </div>
    </div>
  );
};

