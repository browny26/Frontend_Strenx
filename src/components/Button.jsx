import React from "react";
import ArrowRight02Icon from "./icons/arrow-right-02-stroke-rounded";
import "../styles/button.css";

const Button = ({ text, type, onClick = () => {} }) => {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {text}
      <div className="icon">
        <ArrowRight02Icon />
      </div>
    </button>
  );
};

export default Button;
