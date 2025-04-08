import React from "react";
import "../styles/dropdown.css";
import ArrowDown01Icon from "./icons/arrow-down-01-stroke-rounded";
import { useState } from "react";

export const DropdownItem = ({ text, value, onChange }) => {
  return (
    <label htmlFor={text} className="dropdown-item">
      <input
        type="checkbox"
        id={text}
        className="dropdown-item-checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="dropdown-item-checkmark"></span>
      {text}
    </label>
  );
};

export const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <p className="dropdown-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <ArrowDown01Icon className={isOpen ? "arrow rotated" : "arrow"} />
      </p>
      <div className={`dropdown-content ${isOpen ? "show" : "hide"}`}>
        {children}
      </div>
    </div>
  );
};
