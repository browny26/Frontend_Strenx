import React from "react";
import "../styles/productCard.css";

const ProductCard = ({ text, price, rate, imgUrl }) => {
  return (
    <div className="product-card">
      <div className="product-card-content">
        <img src={imgUrl} alt="" />
        <div className="product-card-head">
          <h3 className="product-card-title">{text}</h3>
          <p className="product-card-rate">{rate}</p>
        </div>
      </div>
      <p className="product-card-price">€{price}</p>
    </div>
  );
};

export default ProductCard;
