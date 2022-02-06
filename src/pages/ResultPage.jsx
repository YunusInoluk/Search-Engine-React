import React from "react";
import logo from "../assets/images/logo.png";
import { SearchBar } from "../components/SearchBar";

export const ResultPage = () => {
  return (
    <div className="result-page w-100 container">
      <div className="result-header d-flex align-items-center">
        <img className="mr-5" src={logo} alt="tesodev logo" />
        <SearchBar />
      </div>
    </div>
  );
};
