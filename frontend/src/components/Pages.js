import React from 'react';
import {Switch, Route} from "react-router-dom";
import { Inicio } from './Inicio/';
import  LoginScreen  from './LoginScreen/LoginScreen.js';
import { Products } from './Products/';
import Product from './Products/product';



export const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/products" exact component={Products} />
                <Route path="/product" exact component={Product} />
            </Switch>

        </section>
    )
}
