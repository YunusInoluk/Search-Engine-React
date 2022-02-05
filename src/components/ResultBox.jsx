import React from "react";
import { Link } from "react-router-dom";

export const ResultBox = (props) => {
  return (
    <div className="result-box w-75">
      {props.data.slice(0, 3).map((item, i) => (
        <div
          className="result-container d-flex justify-content-between"
          key={i}
        >
          <div className="left">
            <h4 className="country-city">{item.country + " - " + item.city}</h4>
            <span className="name-date">
              {item.nameSurname + " - " + item.date}
            </span>
          </div>
          <div className="right">
            <h5 className="email">{item.email}</h5>
          </div>
        </div>
      ))}
      <Link to="/show-more">
        <span className="show-more d-block text-center">Show More</span>
      </Link>
    </div>
  );
};
