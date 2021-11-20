import React from 'react';
import 'boxicons';
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Pages } from "./components/Pages";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from './components/Carrito';
import AuthRoute from './components/AuthRoute';
import LoginScreen from './components/LoginScreen/LoginScreen';
import Profile from './components/Profile';




function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
        <Header />
        <AuthRoute exact={true} path={`/profile`}>
            <Profile />
          </AuthRoute>


          <Header />
          <Route exact={true} path="/login">
            <LoginScreen />
          </Route>

          <Header />
          <Carrito />
          <Pages />
        </Router>

      </div>
    </DataProvider>
  );
}

export default App;
