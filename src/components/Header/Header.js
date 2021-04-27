import React from "react";
import { Avatar } from "@material-ui/core";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__leftLogo" src="https://pngimg.com/uploads/twitch/twitch_PNG6.png" alt="twitch logo" />

        <h3>Following</h3>
        <h3>Browse</h3>
        <div className="header__verticalLine"></div>
        <h3>Exports</h3>
        <h3>Music</h3>
        <i className="fas fa-ellipsis-h"></i>
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        <div className="header_centerLogoContainer">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comment-alt"></i>

          <div className="header__rightBits">
            <i className="far fa-gem"></i>
            <h4>Get Bits</h4>
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
