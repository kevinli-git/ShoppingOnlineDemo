import {newStore} from "../store/configureStore";
import { productsFetched } from "../actions/products";
import { addProductToCart, removeProductFromCart } from "../actions/cart";

let store;
describe('products actions', () => {
    
    // set up a fake store for all our tests
    beforeEach(() => {
        store = newStore();
    });

    it('products fetched', () => {
        const products = [ { id: 'a', name: 'a', price: 1}, {id: 'b', name: 'b', price: 2}];
        
        store.dispatch(productsFetched(products));

        expect(store.getState().products).toBe(products);
    });
});


describe('cart actions', () => {

    // set up a fake store for all our tests
    beforeEach(() => {
        store = newStore();
    });

    it('add and remove product', () => {
        const product = { id: 'a', name: 'a', price: 1};
        
        store.dispatch(addProductToCart(product));

        expect(store.getState().cart[0]).toStrictEqual({...product, quantity: 1});

        // add again
        store.dispatch(addProductToCart(product));
        expect(store.getState().cart[0].quantity).toBe(2);

        // remove
        store.dispatch(removeProductFromCart(0));
        expect(store.getState().cart).toStrictEqual([]);
    });
});
