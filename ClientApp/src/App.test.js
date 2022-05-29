import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import configureStore from "./store/configureStore";

import { Provider } from "react-redux";

const initialState = {
  isLoading: false,
  products: [],
  currency: { country: 'AUD', rate: 1 },
  cart: []
};

const store = configureStore(initialState);

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});
