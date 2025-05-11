import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList.jsx";
import { clearCart } from "../utils/Slice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
        🛒 Your Cart
      </h1>

      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 border border-gray-100 transform hover:shadow-2xl transition-all duration-200">
        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {/* Clear Cart Button */}
            <button
              className="w-full py-3 px-6 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              onClick={handleClear}
            >
              <span>🗑️</span> Clear Cart
            </button>

            {/* Cart Items */}
            <ItemList it={cartItems} t={cartItems} />
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-xl font-medium mb-4">
              Your cart is empty
            </p>
            <p className="text-gray-400 text-lg">
              Add some delicious items! 🍕
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
