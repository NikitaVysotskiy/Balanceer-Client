import { ADD_BALANCE, UPDATE_BALANCE_FIELD } from "../constants/action-types";


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
        case UPDATE_BALANCE_FIELD:
            return { ...state, [action.key]: action.value };
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

export const currencies = (state=[]) => {
    return state
};
