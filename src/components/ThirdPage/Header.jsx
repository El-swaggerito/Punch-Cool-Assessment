import React from "react";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import jason from "../../assets/jason.png";

const Header = () => (
  <header className="thirdpage-header">
    <h1>
      How it worked <br /> for Jason{" "}
      <img src={jason} alt="" className="jason" /> at
      <span className="highlight">
        <br />
        groove
      </span>
    </h1>
    <p>
      Zwilt enabled us to deliver on time and they've <br /> been heavy hitters
      in our corner since.
    </p>

    <img className="groove-btn" src={left} alt="" />
    <img className="groove-btn groove-btn-right" src={right} alt="" />
  </header>
);

export default Header;
