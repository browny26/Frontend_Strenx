import React from "react";
import "../styles/carousel.css";
import Item from "./Item";
import wheyprotein from "../assets/main-image/wheyprotein.svg";
import shirt from "../assets/main-image/shirt.png";
import impactprotein from "../assets/main-image/impactprotein.svg";
import impactisolate from "../assets/main-image/impactisolate.svg";
const Carousel = ({ title }) => {
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

        
          <div className="carousel">
          <Item
              image={wheyprotein}
              title={"Whey Protein 100% Gold Standard"}
              fullStars={4}
              emptyStars={1}
              price={"€29,99"}
            />
            <Item
              image={shirt}
              title={"Under Armor Fit Shirt"}
              fullStars={3}
              emptyStars={2}
              price={"€49,99"}
            />
            <Item
              image={impactprotein}
              title={"Impact Whey Protein"}
              fullStars={4}
              emptyStars={1}
              price={"€14,99"}
            />
            <Item
              image={impactisolate}
              title={"Impact Whey Isolate"}
              fullStars={4}
              emptyStars={1}
              price={"€19,99"}
            />
            <Item
              image={impactisolate}
              title={"Impact Whey Isolate"}
              fullStars={4}
              emptyStars={1}
              price={"€19,99"}
            />
          
          </div>
        
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
