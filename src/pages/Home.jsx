import React from "react";
import "../styles/home.css";
import Button from "../components/Button";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Discount from "../components/Discount";
import Logo from "../components/Logo";

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
              src="src\assets\home-img\wheyprotein.svg"
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
        />
      </section>

      <footer>
        <div className="upper-footer">
          <div className="left-footer">
            <Logo size={"medium"} color= {"white"} />
            <div className="footer-paragraph">
              <p>Terms & Condition</p>
              <p>Privacy</p>
              <p>About us</p>
            </div>
          </div>
          <div className="socials">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M4.1665 19.9998C4.1665 12.5359 4.1665 8.80399 6.48524 6.48524C8.80399 4.1665 12.5359 4.1665 19.9998 4.1665C27.4637 4.1665 31.1957 4.1665 33.5145 6.48524C35.8332 8.80399 35.8332 12.5359 35.8332 19.9998C35.8332 27.4637 35.8332 31.1957 33.5145 33.5145C31.1957 35.8332 27.4637 35.8332 19.9998 35.8332C12.5359 35.8332 8.80399 35.8332 6.48524 33.5145C4.1665 31.1957 4.1665 27.4637 4.1665 19.9998Z"
                stroke="#007BFF"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M27.5 20C27.5 24.1422 24.1422 27.5 20 27.5C15.8579 27.5 12.5 24.1422 12.5 20C12.5 15.8579 15.8579 12.5 20 12.5C24.1422 12.5 27.5 15.8579 27.5 20Z"
                stroke="#007BFF"
                stroke-width="1.5"
              />
              <path
                d="M29.1795 10.8335H29.1646"
                stroke="#007BFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M4.1665 19.9998C4.1665 12.5359 4.1665 8.80399 6.48524 6.48524C8.80399 4.1665 12.5359 4.1665 19.9998 4.1665C27.4637 4.1665 31.1957 4.1665 33.5145 6.48524C35.8332 8.80399 35.8332 12.5359 35.8332 19.9998C35.8332 27.4637 35.8332 31.1957 33.5145 33.5145C31.1957 35.8332 27.4637 35.8332 19.9998 35.8332C12.5359 35.8332 8.80399 35.8332 6.48524 33.5145C4.1665 31.1957 4.1665 27.4637 4.1665 19.9998Z"
                stroke="#007BFF"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M17.5597 18.346C16.1929 18.1528 13.0776 18.4725 11.55 21.2972C10.0224 24.1217 11.562 27.0615 12.5227 28.1783C13.4715 29.2232 16.4869 31.2018 19.6855 29.27C20.4783 28.7912 21.466 28.434 22.5865 24.6923L22.4562 9.96924C22.24 11.5905 24.0308 15.3931 29.1298 15.843"
                stroke="#007BFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="lower-footer">
          <p>© 2023 STRENX. All rights reserved</p>
          
          </div>
      </footer>
    </div>
  );
};

export default Home;
