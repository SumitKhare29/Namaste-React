import React from 'react'
import resList from "../utils/mockData";

function useResData(resId) {
    const filterRestaurant = resList.filter((res)=>{
        return res.id === resId;
       });
    return filterRestaurant[0];
}

export default useResData