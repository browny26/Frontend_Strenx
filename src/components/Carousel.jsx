import React, { useState, useEffect } from "react";
import "../styles/carousel.css";
import Item from "./Item";

const Carousel = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (Array.isArray(data.products)) {
        setProducts(data.products);
      } else {
        throw new Error("Products data is not an array");
      }
    };
    getProducts();
  }, []);

  const renderProducts = () => {
    return products.map((product) => {
      const fullStars = Math.floor(product.rate);
      const emptyStars = 5 - fullStars;


      return (
        <Item
          key={product.id}
          image={product.image}
          title={product.name}
          price={product.price}
          fullStars={fullStars}
          emptyStars={emptyStars}
        />
      );
    });
  };
  return (
    <>
      <h1 className="carousel-title">{title}</h1>
      <div className="carousel-container">
        <div className="carousel-content">
          <div className="carousel-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.66684 8.00012L13.3335 8.00012"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.99993 4.66671C5.99993 4.66671 2.66667 7.12164 2.66667 8.00004C2.66667 8.87844 6 11.3334 6 11.3334"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="carousel">{renderProducts()}</div>

          <div className="carousel-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.3332 7.99988H2.6665"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.0001 11.3333C10.0001 11.3333 13.3333 8.87836 13.3333 7.99996C13.3333 7.12156 10 4.66663 10 4.66663"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
