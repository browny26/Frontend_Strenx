import React from "react";
import "../styles/box.css";
import Button from "./Button";

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
            <div className="my-order-box">
              <div className="my-order-box-top">
                <div className="order-number">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.66634 5.33337H13.4637C13.8802 5.33337 14.0885 5.33337 14.2409 5.4006C14.9154 5.69797 14.6139 6.44721 14.5004 6.98564C14.48 7.08237 14.4137 7.16471 14.3207 7.20884C13.9352 7.39177 13.6651 7.73877 13.5943 8.14231L13.1992 10.3919C13.0254 11.3817 12.966 12.7962 12.0986 13.4935C11.4622 14 10.5453 14 8.71134 14H7.28801C5.45409 14 4.53714 14 3.90074 13.4935C3.03336 12.7962 2.97393 11.3817 2.80012 10.3919L2.40506 8.14231C2.33419 7.73877 2.06416 7.39177 1.67862 7.20884C1.58565 7.16471 1.51936 7.08237 1.49897 6.98564C1.3855 6.44721 1.08394 5.69797 1.75842 5.4006C1.9109 5.33337 2.11916 5.33337 2.53566 5.33337H4.99968"
                      stroke="#EAEAEA"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.33366 8H6.66699"
                      stroke="#EAEAEA"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33301 7.33333L6.66634 2M9.99967 2L11.6663 5.33333"
                      stroke="#EAEAEA"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p>n°123123</p>
                </div>
                <div className="order-status">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.5 5.83337V10M2.5 5.83337C2.5 8.38712 2.5 13.9785 2.5 14.3011C2.5 15.4532 4.12137 16.1381 7.36411 17.508C8.66683 18.0582 9.31817 18.3334 10 18.3334V9.46237"
                      stroke="#409249"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 15.8333C12.5 15.8333 13.2292 15.8333 13.9583 17.5C13.9583 17.5 16.2745 13.3333 18.3333 12.5"
                      stroke="#409249"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.93827 8.07611L4.50393 6.89817C3.16797 6.25171 2.5 5.92848 2.5 5.41663C2.5 4.90477 3.16797 4.58154 4.50393 3.93508L6.93827 2.75714C8.44067 2.03013 9.19192 1.66663 10 1.66663C10.8081 1.66663 11.5593 2.03013 13.0617 2.75714L15.4961 3.93508C16.832 4.58154 17.5 4.90477 17.5 5.41663C17.5 5.92848 16.832 6.25171 15.4961 6.89817L13.0617 8.07611C11.5593 8.80313 10.8081 9.16663 10 9.16663C9.19192 9.16663 8.44067 8.80313 6.93827 8.07611Z"
                      stroke="#409249"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 10L6.66667 10.8333"
                      stroke="#409249"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.1663 3.33337L5.83301 7.50004"
                      stroke="#409249"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>Delivered</p>
                </div>
              </div>
              <div className="address">
                <h3>Address:</h3>
                <p>Wall Street 28, United States</p>
              </div>
            </div>
          </div>
        );
    }
  };
  return <div className={`main-account-box ${type}`}>{renderBox()}</div>;
}

export default Box;
