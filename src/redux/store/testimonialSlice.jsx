import { createStore } from "redux";
import groove from "../../assets/groove.png";

const initialState = {
  testimonial: {
    name: "Jason Makki",
    position: "Engineer at GROOVE",
    location: "San Francisco",
    company: "groove",
    logo: groove,
    message:
      "Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
