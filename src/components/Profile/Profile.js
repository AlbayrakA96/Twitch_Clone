import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGzIpQD739Qsw/profile-displayphoto-shrink_200_200/0/1612782105963?e=1623283200&v=beta&t=LthBhLEK5XiIGWlL4funEMGFr13H6Ka4TQi0th_RgNw"
          alt="profile"
        />
        <div className="profile__topLeftDetails">
          <h1>Abdusselam Albayrak</h1>
          <h3>191 followers</h3>
        </div>
        <div className="profile__topRight">
          <i className="fa fa-"></i>
          <i className="fa fa-"></i>
          <i className="fa fa-"></i>
        </div>
      </div>
    </div>
  );
};

export default Profile;
