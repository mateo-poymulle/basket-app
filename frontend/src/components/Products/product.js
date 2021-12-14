
import { Component, useEffect, useState } from "react";
import { httpGet, httpPost } from "../../utils/httpFunctions";
import axios from "axios";
import { ProductItem } from "./Productitem";

import { Link } from "react-router-dom";




class App extends Component {

  
  







  state = {
    title: '',
    category: '',
    image: null,
    price: '',
    cantidad: '',
  };
  

  shoeChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(e.target.value)
  };
  

  shoeImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
    console.log(e.target.files[0])
  };

  ShoeSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('title', this.state.title);
    form_data.append('category', this.state.category);
    form_data.append('price', this.state.price);
    form_data.append('cantidad', this.state.cantidad);
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

  handleRemove = (e) => {
    const id = e.target.data("id");
    const url = 'http://localhost:8000/api/shoes/';
    
    e.preventDefault();
    axios.delete(url + id)
        .then(res => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}

handleList= () => {
  
  const url = 'http://localhost:8000/api/shoes/';
  // const id = document.querySelectorAll("li").props['data-id'];
  
  axios.get(url)
      .then(res => {
          const posts= res.data;
          this.setState({posts})
          console.log(res.data);
      })
      .catch((err) => {
          console.log(err);
      })
}


    editMovie = e => {
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















  render() {
    return (<div className='App'>
      <h1 className="title">Shoes</h1>
      <div className="products">

        

        <form onSubmit={this.ShoeSubmit}>
        <h2> Create Shoe</h2>
          <p>
            <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.shoeChange} required />
          </p>
          <p>
            <input type="text" placeholder='category' id='category' value={this.state.category} onChange={this.shoeChange} required />

          </p>
          <p>
            <input type="number" placeholder='price' id='price' value={this.state.price} onChange={this.shoeChange} required />

          </p>
          <p>
            <input type="number" placeholder='cantidad' id='cantidad' value={this.state.cantidad} onChange={this.shoeChange} required />

          </p>
          <p>
            <input type="file"
              id="image"
              accept="image/png, image/jpeg" onChange={this.shoeImageChange} required />
          </p>
          
          <input type="submit"  />
          
        </form>

        

      
        
        



      </div>
    </div>);
  }
}

export default App