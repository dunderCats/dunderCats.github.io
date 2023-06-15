import React from "react";
import { useRef, useState, useEffect } from "react";

export const TestFileUpload = () => {
  const refFirstName = useRef();
  const refLastName = useRef();
  const refTitle = useRef();
  const refFilePic = useRef();
//comment
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/members")
      .then((res) => res.json())
      .then((membersData) => {
        console.log("members: ", membersData)
        setData(membersData)
      });
  }, []);

  const postMember = (member)=>{
    fetch("http://localhost/member", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(member)
    })
    .then(res => res.json())
    .then(newData => {
        console.log(newData)
    })
    .catch(err => console.error(err))
  }

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    const first_name = refFirstName.current.value
    const last_name = refLastName.current.value
    const title = refTitle.current.value
    const prof_pic = refFilePic.current.value

    const newMember = {
        first_name: first_name,
        last_name: last_name,
        title: title,
        prof_pic: prof_pic
    }
    postMember(newMember)
    e.target.reset()
    
  }

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     // const formData = new FormData();
//     // console.log(formData)
//     // formData.set('pic', filePic.current.value)

//     try {
//       const response = await fetch("/member", {
//         method: "POST",
//         body: {
//           fname: firstName.current.value,
//           lname: lastName.current.value,
//           title: title.current.value,
//           pic: filePic.current.value,
//         },
//       });

//       const parsedResponse = await response.json();
//       if (response.ok) {
//         alert("File uploaded");
//       } else {
//         console.error("Some error occurred");
//       }
//     } catch (e) {
//       console.error(e.message);
//     }
//   };

  return (
    <div className="test">
        {/* {data.map(m => <h2>{m.first_name}</h2>)} */}
      TestFileUpload
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="fname" ref={refFirstName} placeholder="fname" />
        <br />
        <input type="text" name="lname" ref={refLastName} placeholder="lname" />
        <br />
        <input type="text" name="title" ref={refTitle} placeholder="title" />
        <br />
        <input type="file" name="pic" ref={refFilePic} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

// "start": "nodemon server/index.js",
// "start": "react-scripts start",
// "proxy": "http://localhost:80",
