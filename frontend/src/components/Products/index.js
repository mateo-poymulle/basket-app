import React,{useContext, useEffect, useState} from 'react';
// import { useEffect } from 'react';
import axios from 'axios';
import { DataContext } from '../../context/Dataprovider';
import { httpGet, httpPost } from '../../utils/httpFunctions';
import { ProductItem } from './Productitem';

export const Products = () => {
    const [product, setProduct] = useState([])

    const value = useContext(DataContext);
    const[products] = value.products
    

    console.log(products)


    const fetchProduct = () => {
        httpGet('api/shoes/').then((res) => setProduct(res.data))
    }

    const createProduct = () =>{
        httpPost('api/shoes/', { title : product.title, price: product.price ,category: product.category }).then(fetchProduct)
    }

    useEffect(fetchProduct, [])

    return (
        <>
            <h1 className="title">Shoes</h1>
            <div className="products">
            {
                products.map(product => (
                    <ProductItem 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    cantidad={product.cantidad}
                    
                    />
                ))
            }
            

                

                

                
            </div>
        </>
    )
}
