import React from "react";
import { IMG_URL } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItem } from "../utils/Slice";

export const ItemList = ({ it, t = [] }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // Handle adding an item
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  // Handle removing an item
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  // Get quantity of an item in the cart
  const getItemQuantity = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.card.info.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <ul className="space-y-6">
      {t.map((item, itemIndex) => {
        const itemId = item.card.info.id || `item-${itemIndex}`;
        const quantity = getItemQuantity(itemId);

        return (
          <li
            key={itemId}
            className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-200 relative border border-gray-100"
          >
            {/* Food Image */}
            {item.card.info.imageId ? (
              <img
                src={IMG_URL + item.card.info.imageId}
                className="w-24 h-24 object-cover rounded-lg mr-4 border border-gray-200"
                alt={item.card.info.name}
              />
            ) : (
              <div className="w-24 h-24 bg-gray-100 rounded-lg mr-4 flex items-center justify-center text-gray-400 text-sm">
                No Image
              </div>
            )}

            {/* Food Details */}
            <div className="flex-1 space-y-1">
              <p className="text-lg font-semibold text-gray-800">
                {item.card.info.name}
              </p>
              <p className="text-gray-600 font-medium">
                ₹
                {item.card.info.price
                  ? (item.card.info.price / 100).toFixed(2)
                  : (item.card.info.defaultPrice / 100).toFixed(2)}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="absolute right-4 bottom-4 flex items-center gap-2">
              {quantity > 0 ? (
                <div className="flex items-center bg-gray-100 rounded-full shadow-md">
                  <button
                    className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-gray-200 rounded-full transition-all duration-200"
                    onClick={() => handleRemoveItem(itemId)}
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-gray-800 font-medium">
                    {quantity}
                  </span>
                  <button
                    className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-green-500 hover:bg-gray-200 rounded-full transition-all duration-200"
                    onClick={() => handleAddItem(item)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="px-4 py-1.5 bg-green-500 text-white font-medium rounded-full shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-200 flex items-center gap-1"
                  onClick={() => handleAddItem(item)}
                >
                  Add <span className="text-lg">+</span>
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
