import { IMG_URL } from "../utils/config.js";
const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = restaurantData?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h2 className="text-lg font-semibold truncate">{name}</h2>
        <h3 className="text-gray-600 text-sm truncate">
          {cuisines.join(", ")}
        </h3>
        <h4 className="text-gray-500 text-sm">{areaName}</h4>
        <div className="flex justify-between items-center mt-2">
          <h4 className="text-green-600 font-bold">{avgRating} ⭐</h4>
          <h4 className="text-gray-700">{costForTwo}</h4>
        </div>
        <h4 className="text-gray-600 text-sm mt-1">{sla.deliveryTime} min</h4>
      </div>
    </div>
  );
};
export const withPrometedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
};
export default RestaurantCard;
