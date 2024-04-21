import Cards from "./Cards";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
const[list,setList]= useState(resList);
 const filterList=()=>{
   const filteredList= resList.filter((res)=>{
        return res.rating > 4;
    });
   return filteredList; 
 }
  return (
    <>
      <div className="body">
        <div className="search">Will Implement Search</div>
        <div className="filter-container">
          <div className="filter-btn">
            <button
              onClick={() => {
                const updatedList=filterList();
                setList(updatedList);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>
        </div>
        <div className="res-container">
          {list.map((resData) => (
            <Cards key={name} cards={resData} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
