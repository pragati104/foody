import React from "react";

const FoodItems = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{price / 100}</h4>
    </div>
  );
};

export default FoodItems;
