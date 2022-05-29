import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const configureStore = initialState => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
export default configureStore;

export const newStore = (initialState = {
        isLoading: false,
        products: [],
        currency: { country: 'AUD', rate: 1 },
        cart: []
    }) => {
    
    const store = configureStore(initialState);

    return store;
}