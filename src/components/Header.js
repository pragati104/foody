import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const item = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between  p-1 shadow-xl">
      <img
        alt="logo"
        className="w-32 m-2 p-2 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQu5_6eOwX4J-ntvOF6uWndoE3ULlHl0MiLA&usqp=CAU"
      />
      <ul className="flex p-2 gap-10 m-4">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link> Us
        </li>
        <li className="mr-10">
          <Link to="/Cart">Cart - {item.length} items</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
