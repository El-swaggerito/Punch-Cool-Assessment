import React, { useState } from "react";

const FAQItem = ({ category, question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item" onClick={toggleOpen}>
      <div className="faq-question">
        <span className="faq-category">{category}</span>
        <span className="faq-question-text">{question}</span>
        <span className="faq-toggle">{isOpen ? "-" : "+"}</span>
      </div>
    </div>
  );
};

export default FAQItem;
