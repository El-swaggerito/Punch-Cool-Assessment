import React from "react";
import "./Header.css";
import zwilt from "../../assets/zwilt.png";

const Header = () => {
  return (
    <header className="head">
      <h1>
        Finding the right fit <img src={zwilt} alt="" /> has <br /> never been
        easier.
      </h1>
      <p>
        With our rigorous pre-vetting process, you'll never have to <br /> worry
        about finding the ideal candidate ever again.
      </p>
    </header>
  );
};

export default Header;
