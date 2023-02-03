import React from "react";
import { Link } from "react-router-dom";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  //Function to go to next page with pagination :-
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  //Function to go to previous page with pagination :-
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link
              onClick={prevPage}
              className="page-link"
              tabIndex="-1"
              aria-disabled="true"
            >
              <i className="fa-solid fa-angles-left"></i>
            </Link>
          </li>{" "}
          {nPages.map((pgNumber) => {
            return (
              <li
                className={`page-item${
                  currentPage == pgNumber ? "active" : ""
                } `}
                key={pgNumber}
              >
                <Link
                  to=""
                  className="page-link"
                  onClick={() => setCurrentPage(pgNumber - 1)}
                >
                  {pgNumber}
                </Link>
              </li>
            );
          })}
          <li className="page-item">
            <Link onClick={nextPage} className="page-link">
              <i className="fa-solid fa-angles-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
