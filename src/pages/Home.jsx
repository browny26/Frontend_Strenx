import React from "react";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="home-content">
      <section className="hero">
        <div className="hero-cont">
          {/* <div className="grid">
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div> */}

          <div className="left-hero">
            <p>Fitness shop</p>
            <h1>You Push Your Limits, We Provide the Gear to Get You There.</h1>
            <Button
              text={"Discover our products"}
              type={"button"}
              variant={"primary"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
