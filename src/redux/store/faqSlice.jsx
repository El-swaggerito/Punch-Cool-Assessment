import { createStore } from "redux";

const initialState = {
  faqs: [
    {
      id: "1",
      category: "General",
      question: "I want to work part-time, is that possible?",
    },
    {
      id: "2",
      question: "How long are the average projects?",
    },
    {
      id: "3",
      question: "How does the payment works?",
    },
    {
      id: "4",
      question: "How much can I earn?",
    },
    {
      id: "5",
      category: "Joining Process",
      question: "I want to work part-time, is that possible",
    },
    {
      id: "6",
      question: "How long are the average projects?",
    },
    {
      id: "7",
      question: "How long are the average projects?",
    },
    {
      id: "8",
      question: "How much can I earn?",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
