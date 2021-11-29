import React, { createContext, useEffect, useState } from "react";
import { httpGet } from "../utils/httpFunctions.js";
import Data from "../data.js";

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const[shoes, setShoes] = useState([])
    const[menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([])
    const[total, setTotal] = useState(0);

    
    const fetchShoes = () => {
        httpGet('api/shoes/').then((res) => 
        setShoes(res.data)   
    
        )
      }


    useEffect(fetchShoes, [])




    useEffect(() => {
        const shoe = shoes.items;
        if (shoe){
            setShoes(shoe)
        }else{
            setShoes([])
        }
        
    },[])


    const addCarrito = (id) =>{
        const check = carrito.every(item =>{
          return item.id !== id;
        })
        if(check){
            const datas = shoes.filter(shoe =>{
                return shoe.id === id
            })
            setCarrito([...carrito, ...datas])
            
        }else{
            alert("El producto ya ha sido añadido")
        }
    }

    useEffect(()=>{
        const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"))
        if(dataCarrito){
            setCarrito(dataCarrito)

        }

        }, [])

        

    useEffect(() =>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    },[carrito])

    useEffect(() =>{
        const getTotal = () =>{
            const res = carrito.reduce((prev, item) =>{
                return prev + (item.price * item.cantidad)
            }, 0)
            setTotal(res)
            
        }
        getTotal()
        console.log(carrito)
    },[carrito])

    const value ={
        shoes : [shoes],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito,setCarrito],
        total: [total, setTotal]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}