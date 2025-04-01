import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "../assets/icons/user-stroke-rounded.svg";
import CartIcon from "../assets/icons/shopping-basket-03-stroke-rounded.svg";

export const Navbar = () => {
    return (
        <nav>
            <h1>
                STREN<span>X</span>
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/">About us</Link>
                <Link to="/">Contacs</Link>
            </div>
            <div className="buttons">
                <img src={UserIcon} alt="User Icon" />
                <img src={CartIcon} alt="User Icon" />
            </div>
        </nav>
    );
};
