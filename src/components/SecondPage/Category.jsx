import React from "react";

const Category = ({ title, items }) => (
  <div className="category">
    <p>{title}</p>
    <div className="category-items">
      {items.map((item, index) => (
        <div key={index} className="category-item">
          <div className="img-background">
            <img src={item.icon} alt={item.name} className="category-img" />
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Category;
