import React from "react";
import "../styles/card.css";

const Card = ({title,text}) => {
  return (
    <div className="card-cont">
      <div className="circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M18.0643 29.2595L30.3945 12.6411C31.3588 11.3413 33.1664 12.1503 33.1664 13.8816V26.7443C33.1664 27.7815 33.8752 28.6223 34.7496 28.6223H40.7469C42.1091 28.6223 42.8354 30.5276 41.9354 31.7406L29.6052 48.3589C28.6409 49.6586 26.8333 48.8498 26.8333 47.1184V34.2557C26.8333 33.2185 26.1245 32.3778 25.2501 32.3778H19.2528C17.8905 32.3778 17.1643 30.4725 18.0643 29.2595Z"
            stroke="#007BFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="card-text">
        <h1>{title}</h1>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
