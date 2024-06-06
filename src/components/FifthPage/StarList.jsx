import React from "react";
import { useSelector } from "react-redux";
import "../FifthPage/FifthPage.css";
import step from "../../assets/step.png";

const StarList = () => {
  const stars = useSelector((state) => state.stars);

  return (
    <div className="star-list">
      {stars.map((star, index) => (
        <div key={star.id} className={`find-your-star star-${index + 1}`}>
          <div className="text-content">
            <h1>
              <span className={`step-number number-${index + 1}`}>
                {star.step}
              </span>
              {star.title}
            </h1>
            <p>{star.description}</p>
            <div className="step-5">
              <button className="explore-more-button">
                {" "}
                <img src={step} alt="" />{" "}
                <span className="explore-more-text">{star.buttonText}</span>
              </button>
            </div>
          </div>
          <div className="image-content">
            <img src={star.imageUrl} alt={star.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarList;
