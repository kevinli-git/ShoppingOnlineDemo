import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { productsFetchData } from '../actions/products'
import { addProductToCart } from '../actions/cart'

const Products = props => {

    useEffect(() => {
        props.fetchData(props.url);
    }, [props]);

    if (props.isLoading) return <span>loading...</span>;
    return (
        <div>
            <div className="products">
                {props.products &&
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Unit</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {props.products.map(product =>
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.unit}</td>
                                <td>{props.currency.country} {(product.price * props.currency.rate).toFixed(2)}</td>
                                <input type="button" onClick={() => props.addProduct(product)} value="Add to cart" />
                            </tr>
                         )}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products,
        isLoading: state.isLoading,
        currency: state.currency,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(productsFetchData(url)),
        addProduct: product => dispatch(addProductToCart(product)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
