import React from "react";
import { Link } from "react-router-dom";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  // const pageNumbers = () => {
  //   let page = [];
  //   for (let i = 1; i <= nPages; i++) {
  //     page.push(i);
  //   }
  //   return page;
  // };
  let pageNumbers = [1, 2, 3, 4];
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item disabled">
            <Link
              onClick={prevPage}
              className="page-link"
              tabIndex="-1"
              aria-disabled="true"
            >
              <i className="fa-solid fa-angles-left"></i>
            </Link>
          </li>{" "}
          {pageNumbers.map((pgNumber) => {
            return nPages < pgNumber ? (
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
                  {pgNumber - 1}
                </Link>
              </li>
            ) : null;
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
