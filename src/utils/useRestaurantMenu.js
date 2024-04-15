import React, { useState, useEffect } from "react";
import { RES_MENU_URL } from "../utils/config";

const useResaturantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    console.log(json);

    setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
    setResMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  return { resMenu, restaurantInfo };
};

export default useResaturantMenu;
