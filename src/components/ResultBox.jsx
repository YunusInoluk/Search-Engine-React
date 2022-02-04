import React from "react";

export const ResultBox = (props) => {
  return (
    <div className="result-box">
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
      <span className="show-more">Show More</span>
    </div>
  );
};
