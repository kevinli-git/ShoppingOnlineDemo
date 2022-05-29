import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const initialState = {
    isLoading: false,
    products: [],
    currency: { country: 'AUD', rate: 1 },
    cart: []
};

const store = configureStore(initialState);

ReactDOM.render(
    <BrowserRouter basename={baseUrl}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
  rootElement);

registerServiceWorker();

