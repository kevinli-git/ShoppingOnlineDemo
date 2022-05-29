import { actionTypes } from "./actionTypes";
import { fetchProducts } from "../services";

export const productsLoading = bool => {
    return {
        type: actionTypes.PRODUCTS_LOADING,
        isLoading: bool
    };
};

export const productsFetched = products => {
    return {
        type: actionTypes.PRODUCTS_FETCHED,
        products
    };
};

export const productsFetchData = url => {
    return async dispatch => {
        dispatch(productsLoading(true));
        const products = await fetchProducts(url);
        dispatch(productsFetched(products));
        dispatch(productsLoading(false));
    };
};
