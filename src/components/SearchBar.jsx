import React from "react";

export const SearchBar = (props) => {
  return (
    <div className="search-bar w-75 d-flex justify-content-center">
      <input
        type="text"
        className="w-100 search-input"
        onChange={(e) => {
          props.passInputData(e.target.value);
        }}
      />
      <button className="btn btn-custom">Search</button>
    </div>
  );
};
