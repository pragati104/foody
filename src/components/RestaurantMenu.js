import { useParams } from "react-router-dom";
import { IMG_MENU_URL, MENU_IMG_URL } from "../utils/config";
import useResaturantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const dispatch = useDispatch();

  const { resMenu, restaurantInfo } = useResaturantMenu(resId);

  // console.log(resMenu);

  function addFoodItem(menu) {
    dispatch(addItem(menu));
  }
  function removeFoodItem(menu) {
    dispatch(removeItem(menu));
  }

  return (
    <div className="w-9/12 ml-48 my-4 p-2  bg-slate-200 shadow-xl">
      <img
        className="w-72 h-56 p-2"
        alt="menu-img"
        src={IMG_MENU_URL + restaurantInfo?.cloudinaryImageId}
      />
      <h1 className="font-bold text-3xl p-2 ">{restaurantInfo.name}</h1>

      <h2 className="text-xl p-2">{restaurantInfo.id}</h2>

      <h3 className="text-xl p-2">{restaurantInfo.cuisines}</h3>

      <div className="">
        <h2 className="font-bold  text-3xl text-center p-4 ">Menu</h2>
        {resMenu.map((menu) => {
          return (
            <li
              className="list-none p-2  bg-white h-40 m-2"
              key={menu?.card?.info?.id}
            >
              <h2 className="font-bold text-lg">{menu?.card?.info?.name}</h2>
              <h3 className="font-bold text-lg text-green-400">
                Rs.{menu?.card?.info?.price / 100}
              </h3>
              <div className="flex justify-end ">
                <img
                  className="w-36 h-24 p-2 "
                  alt="menu-img"
                  src={MENU_IMG_URL + menu?.card?.info?.imageId}
                />
                <button
                  onClick={() => addFoodItem(menu)}
                  className="bg-gray-200  text-green-800 h-10 p-2 m-4 "
                >
                  Add Item
                </button>
                <button
                  className="bg-gray-200 h-10 text-red-800 p-2  my-4"
                  onClick={() => removeFoodItem(menu)}
                >
                  Remove Item
                </button>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
