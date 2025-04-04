import React from "react";
import "./../styles/logo.css";

const Logo = ({ size, color }) => {
  return (
    <h1
      className={`
            ${
              size === "small"
                ? "small"
                : size === "medium"
                ? "medium"
                : "large"
            } 
            ${
              color === "white"
                ? "text-white"
                : color === "gray"
                ? "text-gray"
                : ""
            }
        `}
    >
      STREN<span className="colored-letter">X</span>
    </h1>
  );
};

export default Logo;
