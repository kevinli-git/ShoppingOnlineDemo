import { products } from "../reducers/products";
import cart from '../reducers/cart';


describe('products reducer', () => {
    test('should return default state when action is not defined', () => {
        expect(products(undefined, {type:'ACTION_TYPE'})).toEqual([]);
    });

    test('should return new state with action payload', () => {
        const mockProducts = [ { name: 'a', price: 1 }, { name: 'b', price: 2 }, ];
        expect(products(undefined, {type:'PRODUCTS_FETCHED', products: mockProducts})).toEqual(mockProducts);
    });
});


describe('cart reducer', () => {
    const defaultState = [ { id: 'a', name: 'a', price: 1, quantity: 1}, {id: 'b', name: 'b', price: 2, quantity: 2}];

    test('remove product from cart', () => {
        expect(cart(defaultState, {type:'REMOVE_PRODUCT_FROM_CART', index:0}).length).toEqual(1);
    });

    test('add product to cart', () => {
        expect(cart(defaultState, {type:'ADD_PRODUCT_TO_CART', product: { id: 'c', name: 'c', price: 5}}).length).toEqual(3);
    });
});