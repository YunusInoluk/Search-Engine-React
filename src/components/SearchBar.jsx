import React from "react";
import { MainContext, useContext } from "../context";
export const SearchBar = () => {
  const { setInputData } = useContext(MainContext);
  return (
    <div className="search-bar w-75 d-flex justify-content-center">
      <input
        type="text"
        className="w-100 search-input"
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button className="btn btn-custom">Search</button>
    </div>
  );
};
