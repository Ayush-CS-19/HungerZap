import RestaurantCard, { withPrometedLabel } from "./Card.js";
import React, { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { FOOD_API } from "../utils/config.js";

const Searching = (searchTxt, restaurantList) => {
  if (!searchTxt) return restaurantList;
  return restaurantList.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
};

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantPromoted = withPrometedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const URL = FOOD_API;
    const data = await fetch(URL);
    const json = await data.json();
    const X_data = await json?.data?.cards[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
    setRestaurants(X_data);
    setFilteredRestaurants(X_data);
  };

  const status = useOnlineStatus();
  if (status === false) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-700 bg-red-100 px-6 py-3 rounded-lg shadow-md">
          You're Offline - Please check your internet connection
        </h1>
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto px-4 mb-8">
        <div className="flex items-center gap-3 bg-white shadow-lg rounded-full p-2 border border-gray-200">
          <input
            type="text"
            name="Search"
            placeholder="Search restaurants..."
            value={searchTxt}
            className="flex-1 px-4 py-2 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredList = Searching(searchTxt, restaurants);
              setFilteredRestaurants(filteredList);
            }}
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-200 font-medium"
          >
            Search
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restraurants/" + restaurant.info.id}
                className="transform hover:scale-105 transition-transform duration-200"
              >
                {restaurant.info.promoted ? (
                  <RestaurantPromoted restaurantData={restaurant} />
                ) : (
                  <RestaurantCard restaurantData={restaurant} />
                )}
              </Link>
            ))
          ) : (
            <Shimmer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
