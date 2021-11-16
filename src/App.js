import React from 'react';
import 'boxicons';
import { Header } from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import {Pages} from "./components/Pages";
import {DataProvider} from "./context/Dataprovider";
import { Carrito } from './components/Carrito';



function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header/>
      <Carrito/>
      <Pages/>
      </Router>
      
    </div>
    </DataProvider>
  );
}

export default App;
