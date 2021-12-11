import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import { httpGet } from "../../utils/httpFunctions";


const baseUrl = 'http://localhost:8000/api/shoes/'







export const Edit = () => {
  const initialShoe = {
    id:'',
    title: '',
    category: '',
    price: '',
    image: null,
    cantidad: ''

  }
  const [shoes, setShoes] = useState([])

  const [selectedFile, setSelectedFile] = useState(null);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [ShoeSeleccionada, setShoeSeleccionada] = useState(initialShoe
   )

  const handleChange = (e) => {

    const { name, value } = e.target;
    setShoeSeleccionada({ ...ShoeSeleccionada, [name]: value });
    
    
  }
  const shoeImageChange = (e) => {
    setShoeSeleccionada({
      image: e.target.files[0],
      
      
    })
    console.log(e.target.files[0])
  };

  const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setShoes(response.data);
      })
  }

  const peticionPost = async () => {
    await axios.post(baseUrl, ShoeSeleccionada, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res=>{
      setShoes(shoes.concat(res.data))
      abrirCerrarModalInsertar()
    })
  }

  const peticionPut = async () => {
    await axios.put(baseUrl + ShoeSeleccionada.id+'/', ShoeSeleccionada, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => {
        var shoeNueva = shoes;
        shoeNueva.map(shoe => {
          if (ShoeSeleccionada.id === shoe.id) {
            shoe.title = ShoeSeleccionada.title;
            shoe.category = ShoeSeleccionada.category;
            shoe.price = ShoeSeleccionada.price;
            shoe.image = ShoeSeleccionada.image;
            shoe.cantidad = ShoeSeleccionada.cantidad;
          }
        })
        setShoes(shoeNueva);
        abrirCerrarModalActualizar();
      })
  }

  const peticionDelete = async () => {
    await axios.delete(baseUrl + ShoeSeleccionada.id, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => {
        setShoes(shoes.filter(shoe => shoe.id !== ShoeSeleccionada.id));
        abrirCerrarModalEliminar();
      })
  }

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalActualizar = () => {
    setModalActualizar(!modalActualizar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  }

  const seleccionarShoe = (shoe, caso) => {
    setShoeSeleccionada(shoe);
    (caso === 'Editar') ? abrirCerrarModalActualizar() : abrirCerrarModalEliminar()
  }





  const onChange = (e) => {

    setShoeSeleccionada({
      image: e.target.files[0]
    }
    )
    console.log(e.target.files[0])
  }


  useEffect(async () => {
    await peticionGet();
  }, [])




  const bodyInsertar = (
    <div>
      <ModalHeader>
        <div><h3>Insertar Personaje</h3></div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>
            Id:
          </label>

          <input
            
            className="form-control"
            
            readOnly
            type="text"
            
          />
        </FormGroup>

        <FormGroup>
          <label>
            Title:
          </label>
          <input
            id='title'
            className="form-control"
            name="title"
            type="text"
            value={ShoeSeleccionada.title}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>
            Category:
          </label>
          <input
            id='category'
            className="form-control"
            name="category"
            type="text"
            value={ShoeSeleccionada.category}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>
            Price:
          </label>
          <input
            id='price'
            className="form-control"
            name="price"
            type="number"
            value={ShoeSeleccionada.price}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>
            Image:
          </label>
          <input
            type="file"
            id='image'
            
            accept=" image/jpg"
            
            onChange={handleChange} required
          />
        </FormGroup>
        <FormGroup>
          <label>
            Cantidad:
          </label>
          <input
            id='cantidad'
            className="form-control"
            name="cantidad"
            type="number"
            value={ShoeSeleccionada.cantidad}
            onChange={handleChange}
          />
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button
          color="primary"
          onClick={() => peticionPost()}
        >
          Insertar
        </Button>
        <Button
          className="btn btn-danger"
          onClick={() => abrirCerrarModalInsertar()}
        >
          Cancelar
        </Button>
      </ModalFooter>
    </div>
  )


  const bodyActualizar = (
    <div>
      <ModalHeader>
        <div><h3>Editar Registro</h3></div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>
            Id:
          </label>

          <input
            className="form-control"
            readOnly
            type="text"
            onChange={handleChange}
            name="id"
            id='id'
          />
        </FormGroup>

        <FormGroup>
          <label>
            Title:
          </label>
          <input
            className="form-control"
            name="title"
            type="text"
            onChange={handleChange}
            value={ShoeSeleccionada && ShoeSeleccionada.title}
            id='title'
          />
        </FormGroup>

        <FormGroup>
          <label>
            Category:
          </label>
          <input
            id='category'
            className="form-control"
            name="category"
            type="text"
            onChange={handleChange}
            value={ShoeSeleccionada && ShoeSeleccionada.category}
          />
        </FormGroup>
        <FormGroup>
          <label>
            Price:
          </label>
          <input
            id='price'
            className="form-control"
            name="price"
            type="number"
            onChange={handleChange}
            value={ShoeSeleccionada && ShoeSeleccionada.price}
          />
        </FormGroup>
        <FormGroup>
          <label>
            Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/png, image/jpeg" onChange={handleChange} required
            name="image"

          />
        </FormGroup>
        <FormGroup>
          <label>
            Cantidad:
          </label>
          <input
            id='cantidad'
            className="form-control"
            name="cantidad"
            type="number"
            onChange={handleChange}
            value={ShoeSeleccionada && ShoeSeleccionada.cantidad}
          />
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button
          color="primary"
          onClick={() => peticionPut()}
        >
          Editar
        </Button>
        <Button
          color="danger"
          onClick={() => abrirCerrarModalActualizar()}
        >
          Cancelar
        </Button>
      </ModalFooter>
    </div>
  )


  const bodyEliminar = (
    <div >
      <p>Estás seguro que deseas eliminar la consola <b>{ShoeSeleccionada && ShoeSeleccionada.title}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={() => peticionDelete()} >Sí</Button>
        <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

  return (


    <div className="App">
      <br />
      <br />
      <Container>
        <br />
        <br />
        <Button color="success" onClick={() => abrirCerrarModalInsertar()}>Crear</Button>
        <br />
        <br />
        <br />
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
            {shoes.map(shoe => {
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
                      onClick={() => seleccionarShoe(shoe, 'Editar')}
                    >
                      Editar
                    </Button>
                    <Button color="danger" onClick={() => seleccionarShoe(shoe, 'Eliminar')}>Eliminar</Button>
                  </td>
                </tr>)
            })}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={modalActualizar} onClose={abrirCerrarModalActualizar}>
        {bodyActualizar}
      </Modal>



      <Modal isOpen={modalInsertar} onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>

      <Modal
        isOpen={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
      </Modal>

    </div>



  )
};
export default Edit;



