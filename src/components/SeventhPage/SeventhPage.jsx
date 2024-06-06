import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store/faqSlice";
import Header from "../SeventhPage/Header";
import FAQList from "../SeventhPage/FAQList";
import "../SeventhPage/SeventhPage.css";

const SeventhPage = () => (
  <Provider store={store}>
    <div className="seventhpage">
      <Header />
      <FAQList />
    </div>
  </Provider>
);

export default SeventhPage;
