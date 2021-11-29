import React,{useContext, useEffect, useState} from 'react';
// import { useEffect } from 'react';
import axios from 'axios';
import { DataContext } from '../../context/Dataprovider';
import { httpGet } from '../../utils/httpFunctions';
import { ProductItem } from './Productitem';

export const Products = () => {
    
    const [shoes, setShoes] = useState([])
    const value = useContext(DataContext);
    
    
    const fetchShoes = () => {
        httpGet('api/shoes/').then((res) => 
        setShoes(res.data)   
    
        )
      }


    useEffect(fetchShoes, [])

    return (
        <>
            <h1 className="title">Shoes</h1>
            <div className="products">
            {
                shoes.map(shoe => (
                    <ProductItem 
                    key={shoe.id}
                    id={shoe.id}
                    title={shoe.title}
                    price={shoe.price}
                    image={shoe.image}
                    category={shoe.category}
                    cantidad={shoe.cantidad}
                    
                    />
                ))
            }
            

                

                

                
            </div>
        </>
    )
}
