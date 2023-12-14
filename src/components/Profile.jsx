
//import치고 rafc라고치면 기본구조 만들어줌

import React from "react";

const Profile = (props) => {
   console.log(props)
  return (
   <div className="profile">
      <img src={props.image} className="photo" alt="" />
      <h2>{props.name}</h2>
      <p>{props.title}</p>
   </div>
  );
};

export default Profile;
