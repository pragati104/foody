import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function clearAllCart() {
    dispatch(clearCart());
  }

  return (
    <div className="flex m-4 p-2 justify-center ">
      <div className="w-96   ">
        {items.map((item) => (
          <li className="bg-gray-100 p-4 m-2 list-none hover:shadow-2xl">
            <FoodItems key={item?.card?.info?.id} {...item?.card?.info} />
          </li>
        ))}
      </div>
      <div>
        <button
          className="bg-red-800 w-20 p-1 m-10 my-24 hover:bg-blue-400 text-white"
          onClick={() => clearAllCart()}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};
export default Cart;
