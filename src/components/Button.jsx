import React from "react";
import ArrowRight02Icon from "./icons/arrow-right-02-stroke-rounded";
import "../styles/button.css";

const Button = ({ text, type, variant, icon, onClick = () => {} }) => {
  return (
    <button
      className={`btn ${!icon && "padding"} ${
        variant === "primary"
          ? "primary"
          : variant === "tertiary"
          ? "tertiary"
          : variant === "secondary"
          ? "secondary"
          : "danger"
      }`}
      onClick={onClick}
      type={type}
    >
      {text}
      {icon && (
        <div className="icon">
          <ArrowRight02Icon />
        </div>
      )}
    </button>
  );
};

export default Button;
