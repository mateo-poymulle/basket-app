

import React from 'react';
import axios from 'axios';
import {Col, Button, Form, FormGroup, Label, Input, FormText,Table,  CardImg} from 'reactstrap';

import FormData from 'form-data'


class editar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            price: '',
            image:null,
            imageold: null,
            imagenew: null,
            cantidad: ''
        };

        this.handleFile = this.handleFile.bind(this);
    }
    componentDidMount() {
        
        axios.get(`http://127.0.0.1:8000/api/shoes/`)
            .then(res => {
                const shoes = res.data;
                this.setState({
                    id: shoes.id,
                    title: shoes.title,
                    price: shoes.price,
                    category: shoes.category,
                    cantidad: shoes.cantidad,             
                    imageold: shoes.image

                });
            })
    }



    handleFile(e){
        this.setState({ imagenew: e.target.files[0]});
    }


    handleUserInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFormSubmit = async (event ) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append( 'title', this.state.title);
        formData.append( 'category', this.state.category);
        formData.append( 'price', this.state.price);
        formData.append( 'cantidad', this.state.cantidad);
        
        
        if (this.state.imagenew!=null) {
            formData.append('image', this.state.imagenew);
        }
        const RecipeId = this.props.match.params.RecipeId;
        await axios.put(`http://127.0.0.1:8000/api/shoes/${RecipeId}/`, formData,  {
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('token')
            }
          } )
            .then(res => {
                this.props.history.push(`/shoes/${RecipeId}`);
            })
            .catch(function (error) {
                alert("error");
                console.log(error);
            })
    };
    handleAlternate(event) {
        event.preventDefault();
        const RecipeId = this.props.match.params.RecipeId;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios.delete(`http://127.0.0.1:8000/api/v0/recipes/${RecipeId}`)
            .then(res => {
                if (res.status === 204) {
                    this.props.history.push(`/recipe`);
                }
            })
            .catch(function (error) {
                alert("Нет прав доступа!");
                console.log(error);
            })
    }

    render() {
        return (
            
            <div key={this.state.id}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Img</th>
              <th>Cantidad</th>
            </tr>
          </thead>

          <tbody>
            {this.state.props.map(shoe => {
              return (

                <tr key={shoe.id}>
                  <td>{shoe.id}</td>
                  <td>{shoe.title}</td>
                  <td>{shoe.category}</td>
                  <td>{shoe.price}</td>
                  <td>{shoe.image}</td>
                  <td>{shoe.cantidad}</td>
                  <td>
                    
                    <Button
                      color="primary"
                      
                    >
                      Editar
                    </Button>
                   
                    <Button color="danger" >Eliminar</Button>
                  </td>
                </tr>)
            })}
          </tbody>
        </Table>
                <Col lg="10" md="11" sm="12" className="form_сenter">
                    <h2>editar</h2>
                    
                <Form onSubmit={event =>this.handleFormSubmit(event)} >

                            <FormGroup>
                                <Label for="title">title</Label>
                                <Input type="text" name="title" id="title"
                                       onChange={this.handleUserInput}
                                       required={true}
                                       Value={this.state.title}

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="category">category</Label>
                                <Input type="text" name="category" id="category"
                                       onChange={this.handleUserInput}
                                       required={true}
                                       defaultValue={this.state.category}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">price</Label>
                                <Input type="number" name="price" id="price"
                                       onChange={this.handleUserInput}
                                       required={true}
                                       defaultValue={this.state.price}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cantidad">cantidad</Label>
                                <Input type="number" name="cantidad" id="cantidad"
                                       onChange={this.handleUserInput}
                                       defaultValue={this.state.cantidad}
                                />
                            </FormGroup>
                            
                            
                            <p>imagen</p>
                            <img top width="200px"
                                     src={this.state.imageold}
                                     alt="photo"
                                     height="200px" display="block"
                            />

                            <FormGroup>
                                <Label for="image">Imagen</Label>
                                <Input type="file" name="image" id="image"
                                       onChange={this.handleFile}
                                />
                                <FormText color="muted">
                                    holi
                                </FormText>
                            </FormGroup>

                            <Button  type="submit">editar</Button>
                            



                </Form>
                </Col>
            </div>
        );
    }
}
export default editar