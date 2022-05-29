import { actionTypes } from "../actions/actionTypes";

export const currency = (state = { country: 'AUD', rate: 1 }, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENCY:
            return action.currency;
        default:
            return state;
    }
};