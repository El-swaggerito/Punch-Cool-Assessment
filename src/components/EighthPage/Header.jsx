import React from "react";
import footerBtn from "../../assets/footer.png";
const Header = () => (
  <header className="eighthpage-header">
    <h1>
      Need a job done, and done <br /> well? Get started
    </h1>
    <button className="get-started-btn">
      <img src={footerBtn} alt="" />
    </button>
  </header>
);

export default Header;
