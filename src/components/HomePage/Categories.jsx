import React from "react";
import "./Categories.css";
import ToggleButton from "./ToggleButton";

const Categories = () => {
  return (
    <div className="categories">
      <div className="category-top">
        <ToggleButton />
      </div>

      <div className="category-bottom">
        <div className="category-bottom-list">
          <p>Python Developer</p>
          <p>Shopify Developer</p>
          <p>MERN Stack Developer</p>
          <p>Full Stack Developer</p>
        </div>

        <div className="category-bottom-list">
          <p>Data Scientist</p>
          <p>Front End Developer</p>
          <p>Shopify Developer</p>
          <p>Python Developer</p>
        </div>

        <div className="category-bottom-list">
          <p>Shopify Developer</p>
          <p>Python Developer</p>
          <p>Full Stack Developer</p>
          <p>Explore More</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
