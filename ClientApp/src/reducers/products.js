import { actionTypes } from "../actions/actionTypes";

export const isLoading = (state = false, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

export const products = (state = [], action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_FETCHED:
            return action.products;
        default:
            return state;
    }
};
