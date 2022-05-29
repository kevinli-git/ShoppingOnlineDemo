import { combineReducers } from "redux";
import { products, isLoading } from "./products";
import cart from "./cart";
import { currency } from "./currency";
export default combineReducers({
    products,
    isLoading,
    cart,
    currency
});