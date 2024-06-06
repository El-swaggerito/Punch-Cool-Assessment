import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Header />
      <SearchBar />
      <Categories />
    </div>
  );
};

export default HomePage;
