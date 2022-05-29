import React, { useEffect, useState} from 'react';
import { connect } from "react-redux";
import { removeProductFromCart, clearCart } from '../actions/cart';
import { calculateShippingCost, placeOrder } from '../services';
import { useHistory } from 'react-router-dom';


const ShoppingCart = props => {

    const [shippingCost, setShippingCost] = useState(0);

    useEffect(() => {
        const totalValue = props.items.reduce((total, item) => total + item.price * item.quantity, 0);
        if (totalValue > 0) {
            calculateShippingCost({ value: totalValue }).then(
                cost => setShippingCost(cost)
            );
        }
        else {
            setShippingCost(0);
        }
    }, [props.items, props.items.length]);

    const history = useHistory();

    const goThankYou = () => {
        history.push("/thank-you");
    };

    const handlePlaceOrder = () => {
        const order = {
            items: props.items.map(item => {
                const { quantity, ...product } = item;
                return { product, quantity };
            })
        };
        placeOrder({ order }).then(data => {
            // clear shopping cart
            props.clearCart();
            // navigate to thank you
            goThankYou();
        });
    };

    return (
        <div>
            <div className="products">
                {props.items &&
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Unit</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.items.map((item, index) =>
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.unit}</td>
                                    <td>{props.currency.country} {(item.price * props.currency.rate).toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>{props.currency.country} {(item.quantity * item.price * props.currency.rate).toFixed(2)}</td>
                                    <td><input type="button" onClick={() => props.removeProduct(index)} value="x" /></td>
                                </tr>
                            )}
                        </tbody>
                    <tfoot>
                        <tr></tr>
                        <tr><td colSpan={3}></td><td>Shipping cost</td><td>{props.currency.country} {(shippingCost * props.currency.rate).toFixed(2)}</td><td></td></tr>
                        <tr><td colSpan={3}></td>
                            <td>Total</td>
                            <td>{props.currency.country} {((props.items.reduce((total, item)=> total + item.price * item.quantity, 0) + shippingCost) * props.currency.rate).toFixed(2) }</td>
                            <td></td>    
                        </tr>
                        </tfoot>
                    </table>
                }
            </div>

            { props.items.length && <input type="button" onClick={handlePlaceOrder} value="checkout" /> }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        items: state.cart,
        currency: state.currency,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: index => dispatch(removeProductFromCart(index)),
        clearCart: () => dispatch(clearCart())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart);