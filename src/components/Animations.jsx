import React from "react";
import { ItemList } from "./ItemList.jsx";
import { motion, AnimatePresence } from "framer-motion";

export const Animations = ({ openCategory, it, index }) => {
  const t = it.card?.card?.itemCards;

  return (
    <AnimatePresence>
      {openCategory.has(index) && (
        <motion.div
          className="p-6 bg-gray-50 rounded-b-xl shadow-inner border-t border-gray-200"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {it.card?.card?.categories ? (
            it.card.card.categories.map((restaurant, resIndex) => (
              <div
                key={restaurant.categoryId || `category-${resIndex}`}
                className="mb-8 last:mb-0"
              >
                {/* Subcategory Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4 relative">
                  {restaurant.title}
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-400 rounded-full"></span>
                </h3>
                {/* Items List */}
                <ItemList it={it} />
              </div>
            ))
          ) : (
            <ItemList it={it} t={t} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
