import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store/testimonialSlice";
import Header from "../ThirdPage/Header";
import TestimonialSection from "../ThirdPage/TestimonialSection";
import "./ThirdPage.css";

const ThirdPage = () => (
  <Provider store={store}>
    <div className="thirdpage">
      <Header />
      <TestimonialSection />
    </div>
  </Provider>
);

export default ThirdPage;
