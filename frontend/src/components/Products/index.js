import React,{ useEffect, useState} from 'react';
// import { useEffect } from 'react';

import { DataContext } from '../../context/Dataprovider';
import { httpGet } from '../../utils/httpFunctions';
import { ProductItem } from './Productitem';

export const Products = () => {
    const [filtered, setFiltered] = useState(false)
    const [shoes, setShoes] = useState([])
    

    const clickFunction = () => {
        setFiltered(!filtered)
    }

    const getName = () => {
        return filtered ? "Filtrar" :  "Dejar de filtrar"
    }

    let finalSubjects;

    if (filtered) {
        finalSubjects = shoes.filter(() => {
            return 
        })
    } else {
        finalSubjects = shoes
    }
    
    
    const fetchShoes = () => {
        httpGet('api/shoes/').then((res) => 
        setShoes(res.data)   
    
        )
      }


    useEffect(fetchShoes, [])

    return (
        <>
            <h1 className="title">Shoes</h1>
            <div className="main-div">
                <button className="btn btn-primary" onClick={clickFunction}>
                    {getName()}
                </button>

            </div>
            <div className="products">

            
            {
                finalSubjects.map(shoe => (
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
