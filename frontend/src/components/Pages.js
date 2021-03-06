import React from 'react';
import {Switch, Route} from "react-router-dom";
import { Inicio } from './Inicio/';

import { Products } from './Products/';
import Edit from './Products/Edit';

import Product from './Products/product';




export const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/products" exact component={Products} />
                <Route path="/product" exact component={Product} />
                <Route path="/edit" exact component={Edit} />
                
                
            </Switch>

        </section>
    )
}
