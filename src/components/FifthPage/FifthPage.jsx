import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import StarList from "../FifthPage/StarList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="fifthpage">
        <StarList />
      </div>
    </Provider>
  );
};

export default App;
