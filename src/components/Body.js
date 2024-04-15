import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { DATA_URL } from "../utils/config";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(DATA_URL);
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div>
      <div>
        <input
          className="my-6 ml-14 w-72 p-1 bg-blue-50 hover:bg-white "
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-1  bg-blue-200 rounded-r-lg  hover:bg-white"
          onClick={() => {
            const filteredRestaurant = restaurantList.filter((res) =>
              res.info.name.toUpperCase().includes(searchText.toUpperCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          search
        </button>
      </div>
      <div className="flex flex-wrap ml-10 gap-4">
        {filteredRestaurant?.map((restrocard) => (
          <Link
            to={"/restaurants/" + restrocard.info.id}
            key={restrocard.info.id}
          >
            <RestaurantCard {...restrocard.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
