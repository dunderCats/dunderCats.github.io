import React from "react";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./AddMember.scss";

export const AddMember = () => {
  // Assigns useRef to each input field
  const refFirstName = useRef();
  const refLastName = useRef();
  const refTitle = useRef();
  const refProfPic = useRef();

  // Use in handleFormSubmit() function
  let navigate = useNavigate();

  const postMember = (member) => {
    fetch("http://localhost/member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    })
      .then((res) => res.json())
      .then((newMemberData) => {
        console.log(newMemberData);
      })
      .catch((err) => console.error(err));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Assigns the value of each input field to these variable names
    const first_name = refFirstName.current.value;
    const last_name = refLastName.current.value;
    const title = refTitle.current.value;
    const prof_pic = refProfPic.current.value;

    // Object to represent new member input in form
    const newMember = {
      first_name: first_name,
      last_name: last_name,
      title: title,
      prof_pic: prof_pic,
    };

    // Pass in postMember function as call back to send to db
    postMember(newMember);

    e.target.reset();

    // When form is submitted, navigates back to member gallery
    navigate('/membersgallery')
  };

  return (
    <div className="AddMember">
      {/* handleFormSubmit() function passed into form tag to handle the form submission */}
      <div className="addHeading">Add Member</div>
      <form className="addForm"onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="fname"
          ref={refFirstName}
          placeholder="First name"
        />
        <br />
        <input type="text" name="lname" ref={refLastName} placeholder="Last name" />
        <br />
        <input type="text" name="title" ref={refTitle} placeholder="Title" />
        <br />
        <input type="text" name="pic" ref={refProfPic} placeholder="Picture" />
        <br />
        <input className="sendButton" type="submit" value="Submit" />
      </form>
    </div>
  );
};
