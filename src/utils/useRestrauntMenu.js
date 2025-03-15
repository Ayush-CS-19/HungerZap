import { useState, useEffect } from "react";
import { MENU_API } from "./config";
const useRestarauntMenu = (resId) => {
  const [RestraurantDetails, setRestraurantDetails] = useState(null);
  const [RestraurantName, setRestraurantName] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsondata = await data.json();
    const items =
      jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    const details = jsondata?.data?.cards[2]?.card?.card?.info;
    setRestraurantName(details);
    setRestraurantDetails(items);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return { RestraurantDetails, RestraurantName };
};
export default useRestarauntMenu;
