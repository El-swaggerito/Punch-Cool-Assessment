import React, { useState } from "react";
import mainLogo from "../../assets/logo.png";
import "../HomePage/Navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={mainLogo} alt="Logo" />
      </div>
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#find-work">Find Work</a>
        </li>
        <li>
          <a href="#find-talent">Find Talent</a>
        </li>
        <li>
          <a href="#articles">Articles</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </div>
      <div className={`auth-buttons ${menuOpen ? "active" : ""}`}>
        <button className="login-button">Log In</button>
        <button className="join-button">Join Now</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
