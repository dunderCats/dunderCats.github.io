import React from "react";
import "./MembersGallery.scss";

export const MembersGallery = () => {
  const members = [
    { member_id: 1, first_name: "Smith" },
    { member_id: 2, first_name: "Johnson" },
    { member_id: 3, first_name: "j" },
    { member_id: 4, first_name: "4" },
    { member_id: 2, first_name: "5" },
    { member_id: 3, first_name: "6" },
    { member_id: 4, first_name: "7" },   
    { member_id: 2, first_name: "5" },
    { member_id: 3, first_name: "6" },
    { member_id: 4, first_name: "7" },
    { member_id: 4, first_name: "4" },
    { member_id: 2, first_name: "5" },
    { member_id: 3, first_name: "6" },
    { member_id: 4, first_name: "7" },
    { member_id: 4, first_name: "4" },
  ];

  const selectRandomMember = () => {
    const randomMemberIndex = [Math.floor(Math.random() * members.length)];
    const randomMember = members[randomMemberIndex]
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
