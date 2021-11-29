import { ProductItem } from "../Products/Productitem";
import { useEffect, useState, useContext } from "react";
import { httpGet, httpPost } from "../../utils/httpFunctions";
import { DataContext } from '../../context/Dataprovider';
import { DataProvider } from "../../context/Dataprovider";


const axios = require('axios');

const Product = () => {

  const value = useContext(DataContext);
  const addCarrito=value.addCarrito;

  const [filtered, setFiltered] = useState(false)
  const [shoes, setShoes] = useState([])

  const [title, setTitle] = useState([])
  const [category, setCategory] = useState([])
  const [price, setPrice] = useState([])
  const [image, setImage] = useState([])





  const clickFunction = () => {
    setFiltered(!filtered)
  }

  const getName = () => {
    return filtered ? "Dejar de filtrar" : "Filtrar"
  }

  let finalSubjects;

  if (filtered) {
    finalSubjects = shoes.filter((subject) => {
      return subject
    })
  } else {
    finalSubjects = shoes
  }

  const fetchShoes = () => {
    httpGet('api/shoes/').then((res) => 
    setShoes(res.data)
    
    

    )
  }

  const createShoe = () => {
    httpPost('api/shoes/', { title: title, category: category, price: price,image: image })
      .then(fetchShoes)
  }

  useEffect(fetchShoes, [])

  return (<div className='App'>
    <h1 className="title">Shoes</h1>
    <div className="products">
    { shoes.map(shoe => (
              
                 <div  key={shoe.id}>
                      <ProductItem 
                          title={shoe.title}
                          category={shoe.category} 
                          price={shoe.price}
                          image={shoe.image}
                        />
                </div>              
              ))} 
    </div>
  </div>)
}

export default Product