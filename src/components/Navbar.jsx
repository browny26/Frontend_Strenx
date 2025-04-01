import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "../assets/icons/user-stroke-rounded.svg";
import CartIcon from "../assets/icons/shopping-basket-03-stroke-rounded.svg";
import "../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-left">
                <h1>
                    STREN<span>X</span>
                </h1>
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
                        Contacs
                    </Link>
                </div>
            </div>

            <div className="buttons">
                <img src={UserIcon} alt="User Icon" />
                <img src={CartIcon} alt="User Icon" />
            </div>
        </nav>
    );
};
