import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestarauntMenu from "../utils/useRestrauntMenu";
import { Menucards } from "./Menucards";

const RestraurantMenu = () => {
  const { resId } = useParams();
  const { RestraurantDetails, RestraurantName } = useRestarauntMenu(resId);

  return RestraurantDetails === null ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Restaurant Name */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          {RestraurantName?.name}
        </h1>

        {/* Restaurant Details Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mb-8 transform hover:scale-[1.02] transition-transform duration-200">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              <span className="text-yellow-400">★</span>
              <span>{RestraurantName?.avgRating}</span>
              <span className="text-gray-500">
                ({RestraurantName?.totalRatings})
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-green-600 font-medium">
                {RestraurantName?.costForTwoMessage}
              </span>
            </h3>
            <h3 className="text-gray-600 font-medium">
              {RestraurantName?.locality}
            </h3>
            <h3 className="text-gray-500 italic">
              {RestraurantName?.cuisines.join(", ")}
            </h3>
          </div>
        </div>

        {/* Menu Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center relative">
          <span className="relative z-10">Menu</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500 rounded-full"></span>
        </h2>

        {/* Menu Cards */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <Menucards
            data_taking={RestraurantDetails.filter(
              (c) =>
                c.card?.["card"]?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default RestraurantMenu;
