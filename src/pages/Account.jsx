import React, { useEffect, useState } from "react";
import "../styles/account.css";
import Selector from "../components/Selector";
import Box from "../components/Box";
import { Link, useNavigate } from "react-router-dom";

const Account = () => {
  const [boxType, setBoxType] = useState("account-details");
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleUser = async () => {
    try {
      const url = "http://localhost:3000/api/auth/status";

      const res = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await res.json();

      setUser(data);
      console.log(data);

      if (!res.ok) {
        console.log("Errore nella visualizzazione dello stato del utente");
        navigate("/login");
      }
    } catch (error) {
      console.log("Error", error);
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        console.log("Logout effettuato con successo");
        navigate("/");
      } else {
        console.log("Errore nel logout");
      }
    } catch (error) {
      console.error("Errore durante il logout:", error);
    }
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <div className="account-content">
      <section className="account-hero">
        <div className="welcome-user">
          <h1>Hello, {user && user.username}!</h1>

          <div className="position">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.07847 14.2447C8.7894 14.5153 8.40293 14.6667 8.00073 14.6667C7.59853 14.6667 7.21213 14.5153 6.923 14.2447C4.27535 11.7507 0.727174 8.96461 2.45751 4.91978C3.39309 2.73278 5.63889 1.33334 8.00073 1.33334C10.3626 1.33334 12.6084 2.73278 13.544 4.91978C15.2721 8.95954 11.7327 11.7593 9.07847 14.2447Z"
                stroke="#858585"
                stroke-width="1.5"
              />
              <path
                d="M10.3337 7.33333C10.3337 8.622 9.28899 9.66667 8.00033 9.66667C6.71166 9.66667 5.66699 8.622 5.66699 7.33333C5.66699 6.04467 6.71166 5 8.00033 5C9.28899 5 10.3337 6.04467 10.3337 7.33333Z"
                stroke="#858585"
                stroke-width="1.5"
              />
            </svg>
            <p>Wall Street 28, United States</p>
          </div>
        </div>
        <main className="account-main">
          <div className="selectors">
            <div className="main-selectors">
              <Selector
                variant={
                  boxType === "account-details"
                    ? "selector-selected"
                    : "selector-black"
                }
                text={"Account Details"}
                icon={"account"}
                onClick={() => setBoxType("account-details")}
              />
              <Selector
                variant={
                  boxType === "my-orders"
                    ? "selector-selected"
                    : "selector-black"
                }
                text={"My Orders"}
                icon={"order"}
                onClick={() => setBoxType("my-orders")}
              />
              <Selector
                variant={
                  boxType === "wishlist"
                    ? "selector-selected"
                    : "selector-black"
                }
                text={"Wishlist"}
                icon={"wishlist"}
                onClick={() => setBoxType("wishlist")}
              />
            </div>

            <Link to={"/login"} className="logout-link">
              <div className="logout-selector">
                <Selector
                  variant={"selector-logout"}
                  text={"Logout"}
                  icon={"logout"}
                  onClick={() => handleLogout()}
                />
              </div>
            </Link>
          </div>
          <Box type={boxType} />
        </main>
      </section>
    </div>
  );
};

export default Account;
