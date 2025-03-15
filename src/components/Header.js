import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import k from "../../assets/k.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [Btname, setBtname] = useState("Login");
  const user = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-400 shadow-xl mx-6 my-4 rounded-3xl px-6 py-4">
      <Title />
      <nav className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li className="text-white hover:text-blue-100 transition-colors duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white hover:text-blue-100 transition-colors duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white hover:text-blue-100 transition-colors duration-200">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-white font-semibold text-xl hover:text-blue-100 transition-colors duration-200">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 font-medium"
              onClick={() => {
                Btname === "Login" ? setBtname("Logout") : setBtname("Login");
              }}
            >
              {Btname}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Title = () => {
  return (
    <a href="/">
      <img
        className="w-16 h-16 rounded-full border-2 border-white shadow-md hover:scale-105 transition-transform duration-200"
        alt="HungerZap"
        src={k}
      />
    </a>
  );
};

export default Header;
