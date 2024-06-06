import React from "react";
import "../SixthPage/SixthPage.css";
import image from "../../assets/6-img.png";
import Slideshow from "../ImageSlider/ImageSlider";

const SixthPage = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h2>
          Why choose <br /> Zwilt?
        </h2>
        <p>
          We take complex hiring <br /> processes - and simplify them. <br />{" "}
          Connecting you to the world’s <br /> highly qualified talent pool.
        </p>
      </div>
      <div className="text-container-right">
        <Slideshow />
      </div>
    </div>
  );
};

export default SixthPage;
