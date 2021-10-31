import { BoxIconElement } from 'boxicons';
import React from 'react';
import img from "../../images_tp/Logo.png";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>

            <Link to="/">
                <div className="logo">
                    <img src={img} alt="logo" width="200" />

                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/products">SHOES</Link>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    )
}
