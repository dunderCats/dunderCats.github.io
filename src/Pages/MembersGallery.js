
import React, { useState, useEffect } from "react";
import "./MembersGallery.scss";
//import { Pictures } from "./Pictures";

export const MembersGallery = () => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost/members")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);

  const selectRandomMember = () => {
    const randomMemberIndex = Math.floor(Math.random() * members.length);
    const randomMember = members[randomMemberIndex];
    alert(randomMember.first_name);
  };

  const filterMembers = members.filter((member) =>
    member.first_name?.toLowerCase().includes(searchQuery.toLowerCase())
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
          <div className="grid_item" key={member.member_id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {member.prof_pic && (
                  <img src={member.prof_pic} alt={member.first_name} />
                )}
                {/* <Pictures /> */}
              </div>
              <div className="flip-card-back">
                <div>{member.first_name}</div>
                <div>{member.quote}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




// import React, { useState, useEffect } from "react";
// import "./MembersGallery.scss";
// // import Sacoya from "../profilePhotos/Sacoya.png";
// // import Farjana from "../profilePhotos/Farjana.png";
// // import Imane from "../profilePhotos/Imane.png";
// // import Tunisia from "../profilePhotos/Tunisia.png";
// // import Samira from "../profilePhotos/Samira.png";
// // import Rosie from "../profilePhotos/Rosie.png";
// // import Xani from "../profilePhotos/Xani.png";
// // import Ethan from "../profilePhotos/Ethan.png";
// // import Leo from "../profilePhotos/Leo.png";
// // import Dan from "../profilePhotos/Dan.png";
// // import Valerie from "../profilePhotos/Valerie.png";
// // import Nicole from "../profilePhotos/Nicole.png";
// // import Reid from "../profilePhotos/Reid.png";
// // import Caridad from "../profilePhotos/Caridad.png";
// // import Mel from "../profilePhotos/Mel.png";
// // import Karina from "../profilePhotos/Karina.png";
// // import Rob from "../profilePhotos/Rob.png";


// export const MembersGallery = () => {
//   const [members, setMembers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetch("http://localhost/members")
//       .then((response) => response.json())
//       .then((data) => {
//         setMembers(data);
//       });
//   }, []);

//   const selectRandomMember = () => {
//     const randomMemberIndex = Math.floor(Math.random() * members.length);
//     const randomMember = members[randomMemberIndex];
//     alert(randomMember.first_name);
//   };

//   const filterMembers = members.filter((member) =>
//     member.first_name?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="MembersGallery">
//       <div className="selectAddSearch">
//         <button id="select" onClick={selectRandomMember}>
//           Select
//         </button>
//         <button id="add">Add</button>
//         <input
//           placeholder="Search a member"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>
//       <div className="grid">
//         {filterMembers.map((member) => (
//           <div className="grid_item" key={member.member_id}>
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 {member.prof_pic && (
//                   <img src={`./Pages/profilePhotos/${member.prof_pic}`} alt={member.first_name} />
//                 )}
//               </div>
//               <div className="flip-card-back">
//                 <div>{member.first_name}</div>
//                 <div>{member.quote}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


