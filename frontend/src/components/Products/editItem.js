

import { DataContext } from '../../context/Dataprovider';
import { httpGet } from '../../utils/httpFunctions';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const EditItem = ({
    
    id,
    title,
    price,
    image,
    category
    
    
}) => {
    const [shoes, setShoes] = useState([])

    const handleRemove = (e) => {
        const id = e.target.data("id");
        const url = 'http://localhost:8000/api/shoes/';
        // const id = document.querySelectorAll("li").props['data-id'];
        e.preventDefault();
        axios.delete(url + id)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    const fetchShoes = () => {
        httpGet('api/shoes/').then((res) => 
        setShoes(res.data)   
    
        )
      }


    useEffect(fetchShoes, [])
    
   const state = {
        title: '',
        category: '',
        image: null,
        price: '',
        cantidad: '',
      };

   const editMovie = e => {
        const url = 'http://localhost:8000/api/shoes/';
        e.preventDefault();
        const id = e.target.data("id");
        axios.put(url + id, {
                title: this.state.title,
                category: this.state.category,
                price:this.state.price,
                image:this.state.image,
                cantidad:this.state.cantidad,
        })
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    

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
                <button className="btn" onSubmit={editMovie}>
                    Editar
                </button>
                
                <button onSubmit={handleRemove}>Eliminar</button>
                
            </div>
        </div>

        
    )
}