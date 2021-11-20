import React from 'react';
import Portada from "../../images_tp/Portada.jpg";
import {Link} from "react-router-dom";

export const Inicio = () => {
    return (
        <div className="home">
            <Link to="/">
                <h1 className="title">Home</h1>
            </Link>
            <Link to="/products">
                <h1 className="title">Shoes</h1>
            </Link>
            <img src={Portada} alt="inicio"  ></img>
        </div>
    )
}
