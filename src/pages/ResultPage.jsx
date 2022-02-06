import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { SearchBar } from "../components/SearchBar";

export const ResultPage = (props) => {
  return (
    <div className="result-page w-100 container pt-5">
      <div className="result-header d-flex align-items-center">
        <Link to="/">
          <img className="mr-5" src={logo} alt="tesodev logo" />
        </Link>
        <SearchBar />
      </div>
      <div className="result-context mt-5">
        {props.data.slice(0, 6).map((item, i) => (
          <div
            className="result-container d-flex justify-content-between"
            key={i}
          >
            <div className="left">
              <h4 className="country-city">
                {item.country + " - " + item.city}
              </h4>
              <span className="name-date">
                {item.nameSurname + " - " + item.date}
              </span>
            </div>
            <div className="right">
              <h5 className="email">{item.email}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
