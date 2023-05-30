import React from "react";
import green from "../../assets/green.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content text-indigo-900">
        <h1 className="gradient__text">Move to the 'Greener' cloud!</h1>
        <p className="text-indigo-900">
          Understand the Co2e for different cloud platforms, compare and choose
          the greener alternative!
        </p>
      </div>

      <div className="header-image">
        <img src={green} alt="GreenFootprint" />
      </div>
    </div>
  );
};

export default Header;
