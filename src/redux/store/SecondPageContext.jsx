import React, { createContext, useState } from "react";
import shopify from "../../assets/shopify.png";
import magento from "../../assets/magento.png";
import data from "../../assets/data.png";
import webflow from "../../assets/webflow.png";
import dotnet from "../../assets/dotnet.png";
import ux from "../../assets/ux.png";
import graphics from "../../assets/graphics.png";
import illustration from "../../assets/illustration.png";
import unreal from "../../assets/unreal.png";
import cinema from "../../assets/cinema.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import vector1 from "../../assets/Vector-1.png";
import vector2 from "../../assets/Vector-2.png";
import vector3 from "../../assets/Vector-3.png";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    categories: [
      {
        title: "IT & Development",
        items: [
          { name: "Shopify Developer", icon: shopify },
          { name: "Magento Developer", icon: magento },
          { name: "Data Scientist", icon: data },
          { name: "Webflow Developer", icon: webflow },
          { name: "Dot Net Developer", icon: dotnet },
          { name: "", icon: right },
        ],
      },
      {
        title: "Design & Creative",
        items: [
          { name: "  ", icon: left },
          { name: "UI/UX Designer", icon: ux },
          { name: "Graphics Designer", icon: graphics },
          { name: "illustration Artist", icon: illustration },
          { name: "Unreal Engine", icon: unreal },
          { name: "Cinema 4D", icon: cinema },
        ],
      },
    ],
    stats: [
      {
        title: "Find Dev and IT professionals to scale your business.",
        items: [
          { name: "989 Skills", icon: vector1 },
          { name: "45 Sub-categories", icon: vector2 },
          { name: "1011 Profiles", icon: vector3 },
        ],
      },
      {
        title: "Explore Creative individuals with a keen eye for detail.  ",
        items: [
          { name: "989 Skills", icon: vector1 },
          { name: "45 Sub-categories", icon: vector2 },
          { name: "1011 Profiles", icon: vector3 },
        ],
      },
    ],
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
