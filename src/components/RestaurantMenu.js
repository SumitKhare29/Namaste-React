import { useParams } from "react-router-dom";
import resList from "../utils/mockData";

function RestaurantMenu() {
  const {resId} = useParams();
  const filterRestaurant = resList.filter((res)=>{
   return res.id === resId;
  });
 console.log(resId);
 console.log(filterRestaurant);
 console.log();

  return (
    <div>
    <h1>{filterRestaurant[0].restaurant}</h1>
    <p>{filterRestaurant[0].name}</p>
    <ul>
      <li>{filterRestaurant[0].cuisine}</li>
    </ul>
    </div>
    
  )
}

export default RestaurantMenu