import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';

import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Thanks from './components/Thanks';

import './custom.css'

export default function App() {

    return (
        <Layout>
            <Route exact path='/' component={Products} />
            <Route path='/cart' component={ShoppingCart} />

            <Route path='/thank-you' component={Thanks} />
        </Layout>
    );
  
}
