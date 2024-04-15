import { IMG_CDN_URL } from "../utils/config";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="m-2 p-2  rounded-md w-60 bg-gray-200 hover:shadow-2xl">
      <img className="h-56 w-60" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-2xl m-2">{name}</h2>

      <h3 className="m-2">{cuisines.join(" ")}</h3>

      <h4 className="font-bold m-2  ">{avgRating}stars</h4>
    </div>
  );
};
export default RestaurantCard;
