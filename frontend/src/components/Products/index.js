import React, { useEffect, useState } from 'react';
// import { useEffect } from 'react';

import { DataContext } from '../../context/Dataprovider';
import { httpGet } from '../../utils/httpFunctions';
import { ProductItem } from './Productitem';

import axios from 'axios';

export const Products = () => {
    const [filtered, setFiltered] = useState(false)
    const [shoes, setShoes] = useState([])
    const [busqueda, setBusqueda] = useState("");

    

    const handleChange = e => {
        setBusqueda(e.target.value);
        
    }

    const filtrar = async() => {
        await axios.get(`http://127.0.0.1:8000/api/shoes/?title=${busqueda}`)
        .then(response=>{
          setShoes(response.data);
          
        }).catch(error=>{
          console.log(error);
        })
      }


    


    const fetchShoes = async()=>{
        await axios.get(`http://127.0.0.1:8000/api/shoes/`)
        .then(response=>{
          setShoes(response.data);
          
        }).catch(error=>{
          console.log(error);
        })
      }


      useEffect(()=>{
        fetchShoes();
        },[])

    return (
        <>
            <h1 className="title">Shoes</h1>
            <div className="containerInput">
                <input
                    className="form-control inputBuscar"
                    value={busqueda}
                    placeholder="Búsqueda por titulo de zapatilla"
                    onChange={handleChange}
                />
                <button className="btn btn-success" onClick={filtrar}>
                    Buscar
                </button>
                <button className="btn btn-success" onClick={fetchShoes}>
                    Filtrar
                </button>
            </div>
            
            <div className="products">


                {shoes &&
                    shoes.map(shoe => (
                        <ProductItem key={shoe.id}
                            
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
