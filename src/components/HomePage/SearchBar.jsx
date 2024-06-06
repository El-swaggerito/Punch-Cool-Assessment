import React from "react";
import "./SearchBar.css";
import search from "../../assets/search-button.png";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Looking for design" />
      <button className="search-btn">
        <img src={search} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
