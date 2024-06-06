import React from "react";
import { useSelector } from "react-redux";
import Testimonial from "./Testimonial";

const TestimonialSection = () => {
  const testimonial = useSelector((state) => state.testimonial);

  return (
    <section className="testimonial-section">
      <Testimonial testimonial={testimonial} />
    </section>
  );
};

export default TestimonialSection;
