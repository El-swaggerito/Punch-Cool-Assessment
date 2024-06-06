import React, { useRef, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import "./ImageSlider.css"; // Ensure the path is correct

const slideImages = [frame1, frame2, frame3];

const Slideshow = () => {
  const imageContainerRef = useRef(null);

  const prev = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollLeft -= 250;
    }
  };

  const next = () => {
    if (imageContainerRef.current) {
      const maxScrollLeft =
        imageContainerRef.current.scrollWidth -
        imageContainerRef.current.clientWidth;
      if (imageContainerRef.current.scrollLeft < maxScrollLeft) {
        imageContainerRef.current.scrollLeft += 250;
      } else {
        imageContainerRef.current.scrollLeft = 0;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slide-container">
      <div className="content">
        <button className="prev" onClick={prev}>
          Prev
        </button>
        <div className="slide-panel" ref={imageContainerRef}>
          {slideImages.map((image, index) => (
            <img
              className="image"
              src={image}
              key={index}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <button className="next" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
