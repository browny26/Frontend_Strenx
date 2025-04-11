import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
