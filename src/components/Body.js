import Cards from "./Cards";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [list, setList] = useState(resList);
  const [currentValue, setsCurrentValue] = useState("");
  const filterList = () => {
    const filteredList = resList.filter((res) => {
      return res.rating > 4;
    })
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
        <div className="filter-container">
          <div className="search">
            <input
              className="search-input"
              type="text"
              value={currentValue}
              onChange={(e) => {
                setCurrentValue(e.target.value);
              }}
            />
            <button
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
          <div className="filter-btn">
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