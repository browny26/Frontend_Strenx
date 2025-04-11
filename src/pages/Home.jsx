import React from "react";
import "../styles/home.css";
import Button from "../components/Button";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Discount from "../components/Discount";
import Footer from "../components/Footer";

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
            <div className="hero-text">
              <p>Fitness shop</p>
              <h1>
                You Push Your Limits, We Provide the Gear to Get You There.
              </h1>
            </div>
            <Button
              text={"Discover our products"}
              type={"button"}
              icon
              variant={"primary"}
            />
            <div className="hero-sponsor">
              {/* <img className="bulk" src="src\assets\home-img\bulk.svg" alt="" srcset="" />
              <img className="under-armor" src="src\assets\home-img\under-armor.svg" alt="" srcset="" />
              <img className="my-protein" src="src\assets\home-img\myprotein.svg" alt="" srcset="" /> */}
            </div>
          </div>
          <div className="right-hero">
            <img
              src="src\assets\main-image\wheyprotein.svg"
              alt=""
              className="whey-protein"
            />
          </div>
        </div>
      </section>
      <section className="sec2">
        <Card
          title={"Benefit title"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
          }
        />
        <Card
          title={"Benefit title"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
          }
        />
        <Card
          title={"Benefit title"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
          }
        />
      </section>

      <section className="sec3">
        <Carousel title={"Best Seller"} />
        <Carousel title={"Recently Added"} />
      </section>

      <section className="sec4">
        <div className="sec4-cont">
          <div className="sec4-left-cont">
            <h1>Fuel Your Muscles with Delicious Strawberry Whey!</h1>
            <div className="sec4-bottom-left">
              <p>
                Delicious, high-protein fuel for muscle growth and recovery.
                Smooth, creamy, and packed with strawberry flavor—try it now!
              </p>
              <div className="sec4-buttons">
                <Button
                  type={"submit"}
                  icon
                  text={"Purchase now"}
                  variant={"primary"}
                />
                <Button
                  type={"submit"}
                  text={"View nutrition values"}
                  variant={"tertiary"}
                />
              </div>
            </div>
          </div>

          <div className="sec4-right-cont">
            <img src="https://placehold.co/300" alt="" />
            <div className="sec4-bottom-right">
              <Discount text={"52% off"} />
              <div className="sec4-price">
                <p className="old-price">€27,99</p>
                <p className="new-price">€12,99</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec5">
        <Carousel title={"Supplements"} />
      </section>

      <section className="sec6">
        <Button
          type={"submit"}
          text={"Discover our products"}
          variant={"primary"}
          icon
        />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
