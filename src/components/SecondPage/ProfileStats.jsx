import React from "react";

const ProfileStats = ({ title, items, index }) => (
  <div className={`profile-stats profile-stats-${index + 1}`}>
    <p className="profile-title">{title}</p>
    <div className="">
      {items.map((item, index) => (
        <div key={index} className={`block skill-${index + 1}`}>
          <img src={item.icon} alt="" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ProfileStats;
