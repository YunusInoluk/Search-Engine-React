import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { SearchBar } from "../components/SearchBar";

export const ResultPage = (props) => {
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 6;
  const pageVisited = pageNumber * userPerPage;

  const displayUsers = props.data
    .slice(pageVisited, pageVisited + userPerPage)
    .map((item, i) => {
      return (
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
      );
    });

  const pageCount = Math.ceil(props.data.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="result-page w-100 container pt-5">
      <div className="result-header d-flex align-items-center">
        <Link to="/">
          <img className="mr-5" src={logo} alt="tesodev logo" />
        </Link>
        <SearchBar />
      </div>
      <div className="result-context mt-5">{displayUsers}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        activeClassName={"active"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        disabledClassName={"disabled"}
      />
    </div>
  );
};
