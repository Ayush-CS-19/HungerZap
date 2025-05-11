import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Animations } from "./Animations";

export const Menucards = ({ data_taking }) => {
  const [openCategory, setOpenCategory] = useState(new Set());

  const toggleCategory = (index) => {
    setOpenCategory((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const RestraurantDetails = data_taking;

  if (!RestraurantDetails || !Array.isArray(RestraurantDetails)) {
    return (
      <p className="text-center text-gray-500 text-lg italic">
        Loading menu...
      </p>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {RestraurantDetails.map((it, index) => (
        <div
          key={it.card?.card?.categoryId || `menu-${index}`}
          className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-200 hover:shadow-lg"
        >
          {/* Category Title */}
          <button
            className="flex justify-between items-center w-full text-left p-5 bg-gradient-to-r from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100 transition-colors duration-200"
            onClick={() => toggleCategory(index)}
          >
            <span className="text-xl md:text-2xl font-semibold text-gray-800">
              {it.card?.card?.title}
            </span>
            <span className="flex items-center text-gray-600">
              {openCategory.has(index) ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </span>
          </button>
          <Animations
            openCategory={openCategory}
            setOpenCategory={setOpenCategory}
            index={index}
            it={it}
          />
        </div>
      ))}
    </div>
  );
};
