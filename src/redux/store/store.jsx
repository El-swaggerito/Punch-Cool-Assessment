import { configureStore } from "@reduxjs/toolkit";
import starReducer from "./starSlice";

const store = configureStore({
  reducer: {
    stars: starReducer,
  },
});

export default store;
