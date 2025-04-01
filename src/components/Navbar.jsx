import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "./icons/user-stroke-rounded";
import CartIcon from "./icons/shopping-basket-03-stroke-rounded";
import "../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-left">
                <Link className="logo" to="/">
                    <h1>
                        STREN<span>X</span>
                    </h1>
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
                        Contacs
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
