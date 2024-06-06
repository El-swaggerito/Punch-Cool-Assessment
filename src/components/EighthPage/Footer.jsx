import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <div className="brand">
          <img src={logo} alt="Zwilt" />
          <p>
            We take complex hiring processes - and <br />
            simplify them. Connecting you to the world’s <br /> highly qualified
            talent pool.
          </p>
          <p>LINKS AND REDIRECTS</p>
          <button className="hire-btn">Hire now</button>
          <button className="apply-btn">Apply now</button>
        </div>
      </div>

      <div className="footer-right">
        <h2>
          Connecting the right people to <br />
          the right businesses.
        </h2>

        <div className="sections">
          <div className="section">
            <h6>Platform</h6>
            <p>Find Work</p>
            <p>Find Talent</p>
            <p>Categories</p>
            <p>About Us</p>
          </div>

          <div className="section">
            <h6>Categories</h6>
            <p>Data Science</p>
            <p>IT & Networking</p>
            <p>Web & Mobile</p>
          </div>

          <div className="section">
            <h6>Help</h6>
            <p>FAQ's</p>
            <p>Contact Us</p>
          </div>

          <div className="section">
            <h6>Get in Touch</h6>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>All rights reserved by Zwilt</p>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
