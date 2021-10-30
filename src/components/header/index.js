import { BoxIconElement } from 'boxicons';
import React from 'react';
import img from "../../images_tp/Logo.png";

export const Header = () => {
    return (
        <header>

            <a href="#">
                <div className="logo">
                    <img src={img} alt="logo" width="200" />

                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">SHOES</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    )
}
