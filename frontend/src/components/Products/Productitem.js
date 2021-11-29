import React, {useContext} from 'react';
import IMG from "../../images_tp/kd14.jpg";
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';
import { httpGet } from '../../utils/httpFunctions';
import { useEffect, useState } from 'react';



export const ProductItem = ({
    key,
    id,
    title,
    price,
    image,
    category,
    cantidad
    
}) => {
    const [shoes, setShoes] = useState([])
    const value = useContext(DataContext);
    const addCarrito=value.addCarrito;
    const fetchShoes = () => {
        httpGet('api/shoes/').then((res) => 
        setShoes(res.data)   
    
        )
      }


    useEffect(fetchShoes, [])
    

    
    

    return (
        

        <div className="product">
            <a href={image}>
                <div className="product_img">
                    <img src={image} alt={title}></img>
                </div>
            </a>
            <div className="product__footer">
                <h1>{title}</h1>
                <p> {category} </p>
                <p className="price">${price}</p>
            </div>
            <div className="buttom">
                <button className="btn" onClick={ () => addCarrito(id)}>
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className="btn"> Vista</a>
                </div>
            </div>
        </div>

        
    )
}
