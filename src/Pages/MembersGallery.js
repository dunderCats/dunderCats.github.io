import React from 'react'
import './MembersGallery.scss'
import { useState, useEffect } from 'react';

export const MembersGallery = () => {
  const [imageURL, setImageURL] = useState([]);

    useEffect(() => {
      fetchImage();
    }, []);

    const fetchImage = ()=> {
      const url = 'https://hp-api.onrender.com/api/characters'
      fetch(url)
      .then(res => res.json())
      .then(data => {
      console.log(data)
      setImageURL(data)
      // const urls = data.map(item => item.image);
      // setImageURL(data);
      });
    };
    // console.log('this:', imageURL)
    // const renderImageRows = () => {
    //   const rows = [];
    //   let currentRow = [];

    //   imageURL.map((member, index) => {
    //     currentRow.push(
    //       <td key={index}>
    //         <img src ={member.image} alt={member.name} />
    //       </td>
    //     );

    //     if (currentRow.length === 5 || index === imageURL.length - 1) {
    //       rows.push(<tr key={index}>{currentRow}</tr>);
    //       currentRow =[];
    //     }
    //   });
    //   return rows;
    // };

    // const pic = imageURL.map(i, index) =>(
    //   <td key ={index}>
    //     <img src=[i.image} alt={i.name} />
    //     </td>
    //   return <td><img src={i.image} alt={i.name} /> </td>
            
    // })

    return(
      <div>
        <table>
          <tbody>
            {imageURL.map((imageURL, index)=>(
              <tr key={index}>
                <td>
                  <img src={imageURL} alt={`Image ${index + 1}`}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};
        
    
  

//   return (
//   // <div className= "title">
//   //   <h1>MembersGallery</h1>
  
//     <div className= "grid">
//       {imageURL.map((url, index) => (
//         <div className="grind_item" key={index}>
//           <img src={url} alt="Member" />
//      </div>
//           ))}
//         </div>
        
//           );
// };

    
// {/* //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       <div className= "grid_item"></div>
// //       {imageURL && <img src={imageURL} alt="Member" />}
// //     </div> */}
// {/* //   // </div> */}
    


