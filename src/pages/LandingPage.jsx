import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { ResultBox } from "../components/ResultBox";
import { SearchBar } from "../components/SearchBar";

export const LandingPage = () => {
  const [inputData, setInputData] = useState("");
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/data")
      .then((res) => res.json())
      .then((json) => setDataUser(json));
  }, []);

  // Create data object for search
  const createObject = (arr) => {
    const [nameSurname, company, email, date, country, city] = arr;
    return {
      nameSurname,
      company,
      email,
      date,
      country,
      city,
    };
  };
  const mergedData = dataUser.map(createObject);

  // Search filter function
  const searchData = (data) => {
    return data.filter(
      (item) =>
        item.nameSurname.toLowerCase().indexOf(inputData) > -1 ||
        item.country.toLowerCase().indexOf(inputData) > -1 ||
        item.company.toLowerCase().indexOf(inputData) > -1 ||
        item.email.toLowerCase().indexOf(inputData) > -1 ||
        item.date.toLowerCase().indexOf(inputData) > -1 ||
        item.city.toLowerCase().indexOf(inputData) > -1
    );
  };
  return (
    <div className="landing-page w-100 d-flex flex-column align-items-center ">
      <img className="w-25" src={logo} alt="tesodev logo" />
      <h5 className="sub-title">Search Web App</h5>
      <SearchBar passInputData={setInputData} />
      {inputData ? <ResultBox data={searchData(mergedData)} /> : null}
    </div>
  );
};
