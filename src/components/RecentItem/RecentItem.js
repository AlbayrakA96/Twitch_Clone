import React from "react";
import "./RecentItem.css";

const RecentItem = ({ url, title }) => {
  return (
    <div className="item">
      <iframe
        width="400"
        height="225"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="item__details">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGzIpQD739Qsw/profile-displayphoto-shrink_200_200/0/1612782105963?e=1623283200&v=beta&t=LthBhLEK5XiIGWlL4funEMGFr13H6Ka4TQi0th_RgNw"
          alt=""
        />
        <div className="item__detailText">
          <h4>{title}</h4>
          <p>Abdusselam Albayrak</p>
          <p>Web Development & Front- End</p>
        </div>
      </div>
    </div>
  );
};

export default RecentItem;
