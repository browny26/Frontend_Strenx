import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "./icons/user-stroke-rounded";
import CartIcon from "./icons/shopping-basket-03-stroke-rounded";
import "../styles/navbar.css";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link className="logo" to="/">
          <Logo size={"medium"} color={"white"} />
        </Link>

        <div className="links">
          <Link className="anchor" to="/">
            Home
          </Link>
          <Link className="anchor" to="/products">
            Products
          </Link>
          <Link className="anchor" to="/">
            About us
          </Link>
          <Link className="anchor" to="/">
            Contacts
          </Link>
        </div>
      </div>

      <div className="buttons">
        <Link to="/">
          <div className="eclipse">
            <UserIcon className="navbar-icon" />
          </div>
        </Link>
        <Link to="/">
          <div className="eclipse">
            <CartIcon className="navbar-icon" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
