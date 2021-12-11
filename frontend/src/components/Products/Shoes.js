import { ProductItem } from "../Products/Productitem";
import { useEffect, useState, useContext } from "react";
import { httpGet, httpPost } from "../../utils/httpFunctions";
import { DataContext } from '../../context/Dataprovider';
import { DataProvider } from "../../context/Dataprovider";


const axios = require('axios');

const Shoes = () => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    const [filtered, setFiltered] = useState(false)
    const [shoes, setShoes] = useState([])

    const [title, setTitle] = useState([])
    const [category, setCategory] = useState([])
    const [price, setPrice] = useState([])
    const [image, setImage] = useState([])
    const [cantidad, setCantidad] = useState([])




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

    const shoeImageChange = (e) => {
        setImage({
          image: e.target.files[0]
        })
      };

    const fetchShoes = () => {
        httpGet('api/shoes/').then((res) =>
            setShoes(res.data)



        )
    }

    const ShoeSubmit = (e) => {
        e.preventDefault();
        
        let form_data = new FormData();
        form_data.append('image', image);
        form_data.append('title', title);
        form_data.append('category', category);
        form_data.append('price', price);
        form_data.append('cantidad', cantidad);
        let url = 'http://localhost:8000/api/shoes/';
        axios.post(url, form_data, {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err))
      };

    const createShoe = (e) => {
        e.preventDefault()
        httpPost('api/shoes/', { title: title, category: category, price: price, image: image, cantidad: cantidad })
            .then(fetchShoes)
        localStorage.setItem('token', fetchShoes.access)

    }

    useEffect(fetchShoes, [])

    return (<div className='App'>
        <h1 className="title">Shoes</h1>
        <div className="products">


            <div className="main-div">
                <button className="btn btn-primary" onClick={clickFunction}>
                    {getName()}
                </button>

            </div>

            
                {
                    finalSubjects
                        .map((shoe) => {
                            return (
                                
                                    <ProductItem
                                        title={shoe.title}
                                        category={shoe.category}
                                        price={shoe.price}
                                        image={shoe.image}
                                    />

                                
                            )

                        })
                }
            







        </div>
    </div>);

}

export default Shoes