import React from "react";
import Channel from "../Channel/Channel";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQGzIpQD739Qsw/profile-displayphoto-shrink_200_200/0/1612782105963?e=1623283200&v=beta&t=LthBhLEK5XiIGWlL4funEMGFr13H6Ka4TQi0th_RgNw"
          name="Albayrak"
          followers="300k"
        />
        <Channel
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQGzIpQD739Qsw/profile-displayphoto-shrink_200_200/0/1612782105963?e=1623283200&v=beta&t=LthBhLEK5XiIGWlL4funEMGFr13H6Ka4TQi0th_RgNw"
          name="Albayrak"
          followers="300k"
        />
        <h5>RECOMENDED CHANNELS</h5>
        <Channel
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQGzIpQD739Qsw/profile-displayphoto-shrink_200_200/0/1612782105963?e=1623283200&v=beta&t=LthBhLEK5XiIGWlL4funEMGFr13H6Ka4TQi0th_RgNw"
          name="Albayrak"
          followers="300k"
        />
        <p className="sidebar__topshowMore">Show more</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to Add Friends" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
