import { useParams } from "react-router-dom";
import useResData from "../utils/useResData";

function RestaurantMenu() {
  const {resId} = useParams();
  const filterRestaurant = useResData(resId); //custom hook
  return (
    <div className="flex items-center flex-col">
    <h1 className="font-bold my-6 text-2xl">{filterRestaurant.restaurant}</h1>
    <p>{filterRestaurant.name}</p>
    <ul>
      <li className="font-bold text-lg">{filterRestaurant.cuisine}</li>
    </ul>
    </div>
    
  )
  }

export default RestaurantMenu