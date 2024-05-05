import { useParams } from "react-router-dom";
import useResData from "../utils/useResData";

function RestaurantMenu() {
  const {resId} = useParams();
  const filterRestaurant = useResData(resId); //custom hook
  return (
    <div>
    <h1>{filterRestaurant.restaurant}</h1>
    <p>{filterRestaurant.name}</p>
    <ul>
      <li>{filterRestaurant.cuisine}</li>
    </ul>
    </div>
    
  )
  }
export default RestaurantMenu