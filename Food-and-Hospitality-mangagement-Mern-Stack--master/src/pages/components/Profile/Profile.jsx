import React from "react";
//import Login from "../Login/index"
import "./Profile.css";

const Profile = ({ setLoginUser }) => {
  return (
    
    <div className="homepage">

      <div className="homepage-form">
        <h1>Hello Homepage</h1>
        <div className="button" onClick={() => setLoginUser({})}>
          Logout
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
