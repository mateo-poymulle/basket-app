import React, {useContext, useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

import {DataContext} from "../../context/Dataprovider";
import { httpGet } from '../../utils/httpFunctions';

export const Carrito = () => {
    const history = useHistory()
    const value = useContext(DataContext)
    const[menu, setMenu] = value.menu;
    const[carrito,setCarrito] = value.carrito;
    const[total] = value.total;
    const [ shoes, setShoes] = useState([])

    const fetchShoes = () => {
        httpGet('api/shoes/').then((res) => 
        setShoes(res.data)   
    
        )
      }


    useEffect(fetchShoes, [])


    const tooglefalse = () => {
        setMenu(false)
    }

    const show1 = menu ?  "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
            }
            setCarrito([...carrito])
        })
    }

    const suma = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad+= 1

            }
            setCarrito([...carrito])
        })
    }


    const removeProduct= id=>{
        if(window.confirm("Quieres eliminar el producto?")){
            carrito.forEach((item, index) => {
                if(item.id === id){
                    item.cantidad= 1;
                    carrito.splice(index, 1)
                }

                
            })
            setCarrito([...carrito])
            }
            
    }
    function myFunction() {
        alert("El Pago se ha realizado con exito!");
        
      }


    
    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">

                {
                    carrito.length === 0 ? <h2 style={{
                        textAlign: "center", fontSize:"3rem"
                    }}> Carrito Vacio</h2>: <> 

                    {
                    carrito.map((shoe)=>(
                        <div className="carrito__item" key={shoe.id}>
                        <img src={shoe.image} alt={shoe.title}></img>
                        <div>
                            <h3>{shoe.title}</h3>
                            <p className="price">${shoe.price}</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid" onClick={() => suma(shoe.id)}></box-icon>
                            <p className="cantidad">{shoe.cantidad}</p>
                            <box-icon name="down-arrow" type="solid" onClick={() => resta(shoe.id)}></box-icon>
                        </div>

                        <div className="remove_item" onClick={ () => removeProduct(shoe.id)}>
                            <box-icon name="trash"></box-icon>

                        </div>
                    </div>
                    ))
                 }
                 </>
                    }

                </div>
                    <div className="carrito_footer">
                        <h3>Total: ${total}</h3>
                        
                        <button className="btn" onClick={myFunction}>Payment</button>
                        
                    </div>
            </div>
        </div>
    )
}
