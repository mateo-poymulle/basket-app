import React from 'react';
import 'boxicons';
import { Header } from "./components/header";
import { Products } from "./components/products/index";


function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
