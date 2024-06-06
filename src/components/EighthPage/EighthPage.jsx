import React from "react";
import { Provider } from "react-redux";
import "./EighthPage.css";
import Footer from "./Footer";
import Header from "./Header";
import store from "../../redux/store/footerSlice";

const EighthPage = () => (
  <Provider store={store}>
    <div className="eighthpage">
      <Header />
      <Footer />
    </div>
  </Provider>
);

export default EighthPage;
