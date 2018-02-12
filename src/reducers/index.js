import { ADD_BALANCE } from "../constants/action-types";


export const balance = (state={}, action) => {
    switch (action.type) {
        case ADD_BALANCE:
            return {
                balanceType: action.balanceType,
                currency: action.currency,
                amount: action.amount,
                source: action.source,
                date: action.date
            };
        default:
            return state
    }
};

export const balanceItems = (state=[], action) => {
    switch (action.type) {
        case ADD_BALANCE:
            return [
                ...state,
                balance({}, action)
            ];
        default:
            return state
    }
};


