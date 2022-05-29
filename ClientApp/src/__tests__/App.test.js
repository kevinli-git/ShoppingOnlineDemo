import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import {newStore} from "../store/configureStore";

import { Provider } from "react-redux";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([ ]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it('renders without crashing', async () => {
  render(
    <MemoryRouter>
      <Provider store={newStore()}>
        <App />
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByText(/ShoppingOnlineDemo/i)).toBeInTheDocument();
});
