import React, { useState } from "react";
import { MainContext, useContext } from "../context";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { SearchBar } from "../components/SearchBar";

export const ResultPage = (props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const { setSelectedSort } = useContext(MainContext);

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
          <img className="logo mr-5" src={logo} alt="tesodev logo" />
        </Link>
        <SearchBar />
      </div>
      <div className="sorter">
        <select
          name="user-sort"
          id="user-sort"
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="default" disabled selected>
            ⇵ Order by
          </option>
          <option value="name-az">Name A-Z</option>
          <option value="name-za">Name Z-A</option>
          <option value="year-asc">Year Ascending</option>
          <option value="year-desc">Year Descending</option>
        </select>
      </div>
      <div className="result-context mt-1 mb-5">{displayUsers}</div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"custom-page-link"}
        activeClassName={"active"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"custom-prev"}
        nextLinkClassName={"custom-next"}
        disabledClassName={"disabled"}
      />
    </div>
  );
};
