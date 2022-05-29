import React from 'react';
import { connect } from "react-redux";
import {setCurrency} from '../actions/currency';

const Currency = (props) => {

    const currencyList = [
        { country: 'AUD', rate: 1 },
        { country: 'NZD', rate: 1.1 },
        { country: 'USD', rate: 0.7 },
    ];

    return (<select value={props.currency.country} onChange={event=> {
            const selectedCurrency = currencyList.find(c => c.country === event.target.value);
            props.setCurrency(selectedCurrency);
        }} className="nav-link">
        {
            currencyList.map(c => 
                <option key={c.country} value={c.country}>{c.country}</option>
            )
        }
  </select>);
}

const mapStateToProps = state => {
    return {
        currency: state.currency,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrency: currency => dispatch(setCurrency(currency)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Currency);