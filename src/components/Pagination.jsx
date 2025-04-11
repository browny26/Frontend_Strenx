import React from "react";
import ArrowRight02Icon from "./icons/arrow-right-02-stroke-rounded";
import "../styles/pagination.css";
import ArrowLeft01Icon from "./icons/arrow-left-01-stroke-rounded";
import ArrowRight01Icon from "./icons/arrow-right-01-stroke-rounded";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        <ArrowLeft01Icon />
      </button>
      <div className="pagination-container">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`${
              currentPage === index + 1 ? "active" : ""
            } pagination-item`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        <ArrowRight01Icon />
      </button>
    </div>
  );
};

export default Pagination;
