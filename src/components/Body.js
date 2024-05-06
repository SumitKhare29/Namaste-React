import Cards, { PromotedCards } from "./Cards";
import resList from "../utils/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [list, setList] = useState(resList);
  const [currentValue, setCurrentValue] = useState("");
  const PromotedCardsNew = PromotedCards(Cards); // Higher Order Component
  const filterList = () => {
    const filteredList = resList.filter((res) => {
      return res.rating > 4;
    });
    return filteredList;
  };
  const searchedList = (searchedValue) => {
    const filteredList = resList.filter((res) => {
      console.log(res.name);
      return res.name.toLowerCase().includes(searchedValue.toLowerCase());
    });
    return filteredList;
  };
  return (
    <>
      <div className="body">
        <div className="filter-container flex items-center">
          <div className="search m-4 p-4">
            <input
              className="border border-solid m-1 p-1 w-[1100px] h-[40px] shadow-lg border-green-800 rounded-lg hover:bg-green-50 hover:shadow-2xl"
              type="text"
              value={currentValue}
              onChange={(e) => {
                setCurrentValue(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 shadow-lg rounded-lg hover:bg-green-200 hover:shadow-2xl"
              onClick={() => {
                console.log(currentValue);
                const newList = searchedList(currentValue);
                console.log(newList);
                setList(newList);
              }}
            >
              Search
            </button>
          </div>
          <div className="px-4 py-2 bg-green-100 m-4 shadow-lg rounded-lg hover:bg-green-200 hover:shadow-2xl">
            <button
              onClick={() => {
                const updatedList = filterList();
                setList(updatedList);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>
        </div>
        <div className="res-container flex flex-wrap">
          {list.map((resData) => (
            <Link to={"/restaurant/" + resData.id} key={resData.id}>
              {resData.promoted? <PromotedCardsNew cards={resData}/>:<Cards cards={resData} />}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
