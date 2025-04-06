import React from "react";
import "../styles/box.css";
import Button from "./Button";
import Order from "./Order";

function Box({ type }) {
  const renderBox = () => {
    switch (type) {
      case "account-details":
        return (
          <>
            <h1>Account Details</h1>

            <form action="">
              <div className="personal-info">
                <div className="top">
                  <p>Personal Informations</p>
                  <hr></hr>
                </div>

                <div className="account-input">
                  <div className="input">
                    <label htmlFor="username">Username</label>
                    <input type="text" />
                  </div>
                  <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                  </div>
                </div>
                <button type="submit">Save Changes</button>
              </div>
            </form>

            <form action="">
              <div className="password">
                <div className="top">
                  <p>Password</p>
                  <hr></hr>
                </div>

                <div className="account-input">
                  <div className="input">
                    <label htmlFor="password">Password</label>
                    <input className="account-password" type="password" />
                  </div>
                </div>
                <button type="submit">Change Password</button>
              </div>
            </form>
          </>
        );

      case "my-orders":
        return (
          <div className="my-orders">
            <h1>My Orders</h1>
              <div className="scroll-orders">
                <Order />
                <Order />
              </div>
            
          </div>
        );
    }
  };
  return <div className={`main-account-box ${type}`}>{renderBox()}</div>;
}

export default Box;
