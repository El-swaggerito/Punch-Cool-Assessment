import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isIT, setIsIT] = useState(true);

  const toggleText = () => {
    setIsIT(!isIT);
  };

  return (
    <div className="toggle-button">
      <div className={`option ${isIT ? "active" : ""}`} onClick={toggleText}>
        IT & Development
      </div>
      <div className={`option ${!isIT ? "active" : ""}`} onClick={toggleText}>
        Design and Creative
      </div>
    </div>
  );
};

export default ToggleButton;
