import React from "react";

const Testimonial = ({ testimonial }) => (
  <div className="testimonial">
    <div className="testimonial-head">
      <div>
        <img src={testimonial.logo} alt={testimonial.company} />
      </div>
      <div>
        <h3>{testimonial.name}</h3>
        <small>{testimonial.position}</small>
        <small>{testimonial.location}</small>
      </div>
    </div>
    <div className="testimonial-body">
      <p>{testimonial.message}</p>
    </div>
  </div>
);

export default Testimonial;
