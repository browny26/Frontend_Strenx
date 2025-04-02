import React from "react";
import "../styles/carousel.css";
import Item from "./Item";
import wheyprotein from "../assets/home-img/wheyprotein.svg";

const Carousel = ({ title }) => {
  return (
    <div className="carousel-content">
      <h1>{title}</h1>
      <div className="carousel">
        <div className="carousel-circle left">
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.99993 4.66671C5.99993 4.66671 2.66667 7.12164 2.66667 8.00004C2.66667 8.87844 6 11.3334 6 11.3334"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Item
          image={wheyprotein}
          title={"Whey Protein 100% Gold Standard"}
          price={"€29,99"}
          fullStars={3}
          emptyStars={2}
          
        />
        <Item />
        <Item />
        <Item />
        <div className="carousel-circle right">
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.0001 11.3333C10.0001 11.3333 13.3333 8.87836 13.3333 7.99996C13.3333 7.12156 10 4.66663 10 4.66663"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
