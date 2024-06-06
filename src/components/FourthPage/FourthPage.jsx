import React from "react";
import "../FourthPage/FourthPage.css";
import video1 from "../../assets/video-1.png";
import video2 from "../../assets/video-2.png";

const FourthPage = () => {
  return (
    <div className="screening-process">
      <div className="screening-process-content">
        <h1>How we ensure you’re in good hands.</h1>
        <p>
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>
        <div className="steps">
          <div className="step">
            <div className="step-icon">
              <img src={video1} alt="" />
            </div>
            <div className="step-content">
              <h2>Step 1: Resume Screening</h2>
            </div>
          </div>
          <div className="step active">
            <div className="step-icon">
              <img src={video2} alt="" />
            </div>
            <div className="step-content">
              <h2>Step 2: Video Interview</h2>
              <p>
                Candidates are assessed through skill-based questions in a
                virtual setting. Allowing you to gauge personality and cultural
                fit.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">
              <img src={video1} alt="" />
            </div>
            <div className="step-content">
              <h2>Step 3: Technical Evaluation</h2>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">
              <img src={video1} alt="" />
            </div>
            <div className="step-content">
              <h2>Step 4: Application Review</h2>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">
              <img src={video1} alt="" />
            </div>
            <div className="step-content">
              <h2>Step 5: Lets get to work</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
