import React from "react";
import "./Profile.css";
import RecentItem from "./../RecentItem/RecentItem";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGzIpQD739Qsw/profile-displayphoto-shrink_200_200/0/1612782105963?e=1623283200&v=beta&t=LthBhLEK5XiIGWlL4funEMGFr13H6Ka4TQi0th_RgNw"
          alt="profile"
        />
        <div className="profile__topLeftDetails">
          <h2>Abdusselam Albayrak</h2>
          <h4>191 followers</h4>
        </div>
      </div>
      <div className="profile__topRight">
        <i className="fa fa-heart graybg"></i>
        <i className="fa fa-bell graybg"></i>
        <i className="fa fa-ellipsis-v"></i>
      </div>
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItem url={"https://www.youtube.com/embed/vzHrjOMfHPY"} title={"League Of legends"} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
