import React from "react";
import { useSelector } from "react-redux";
import FAQItem from "../SeventhPage/FAQItem";

const FAQList = () => {
  const faqs = useSelector((state) => state.faqs);

  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          category={faq.category}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FAQList;
