import { createSlice } from "@reduxjs/toolkit";
import group1 from "../../assets/group-1.png";
import group2 from "../../assets/group-2.png";
import group3 from "../../assets/group-3.png";

const initialState = [
  {
    id: 1,
    step: 1,
    title: "Find your next star performer.",
    description:
      "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
    buttonText: "Join Now",
    imageUrl: group1,
  },
  {
    id: 2,
    step: 2,
    title: "Evaluate to your heart’s content.",
    description:
      "Assess the candidate through work history, transparent tests and video interviews.",
    buttonText: "Browse More",
    imageUrl: group2,
  },
  {
    id: 3,
    step: 3,
    title: "Start building your team.",
    description:
      "Onboard your candidate right away and start creating the next big thing.",
    buttonText: "Join Now",
    imageUrl: group3,
  },
];

const starSlice = createSlice({
  name: "stars",
  initialState,
  reducers: {},
});

export default starSlice.reducer;
