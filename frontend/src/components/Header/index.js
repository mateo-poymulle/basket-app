
import React, { useContext } from 'react';
import img from "../../images_tp/Logo.png";
import {Link} from "react-router-dom";
import {DataContext} from "../../context/Dataprovider"

export const Header = () => {
    const value =useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;

    const toogleMenu = () =>{
        setMenu(!menu)
    }

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
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    )
}
