import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./redux/store/SecondPageContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
