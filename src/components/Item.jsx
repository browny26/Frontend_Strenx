import React from "react";
import "../styles/item.css";
import  FullStar  from "../components/icons/full-star";
import EmptyStar from "../components/icons/empty-star";



const Item = ({
  image,
  title,
  price,
  fullStars,
  emptyStars,
  size
}) => {
  
  return (
    <div className={`item ${size}`} >
      <img className="carousel-wheyprotein" src={image} alt="" srcset="" />
      <div className="title">
        <h2>{title}</h2>
        <div className="star">
          {/* Stelle piene */}
          {Array.from({ length: fullStars }, (_, i) => (
            <FullStar key={`full-${i}`} />
          ))}

          {/* Stelle vuote */}
          {Array.from({ length: emptyStars }, (_, i) => (
            <EmptyStar key={`empty-${i}`} />
          ))}
        </div>
      </div>
      <h1> € {price}</h1>
    </div>
  );
};

export default Item;
