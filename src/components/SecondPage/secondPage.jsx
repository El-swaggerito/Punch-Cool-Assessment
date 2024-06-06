import React, { useContext } from "react";
import { AppProvider, AppContext } from "../../redux/store/SecondPageContext";
import Header from "../SecondPage/Header";
import Category from "../SecondPage/Category";
import ProfileStats from "../SecondPage/ProfileStats";
import "./SecondPage.css";
import step from "../../assets/step.png";

const SecondPage = () => {
  const { state } = useContext(AppContext);

  return (
    <AppProvider>
      <div className="secondpage">
        <Header />
        <div className="App-flex">
          <div className="flex-2">
            {state.stats.map((stat, index) => (
              <ProfileStats key={index} title={stat.title} items={stat.items} />
            ))}

            <div className="explore-more">
              <button className="explore-more-button">
                {" "}
                <img src={step} alt="" />{" "}
                <span className="explore-more-text">Explore More</span>
              </button>
            </div>
          </div>

          <div className="flex-1">
            {state.categories.map((category, index) => (
              <Category
                key={index}
                title={category.title}
                items={category.items}
              />
            ))}
            <p>
              <span className="more">30 more </span>to explore
            </p>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default SecondPage;
