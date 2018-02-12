import { ADD_BALANCE, GET_TOTAL_USD, GET_TOTAL_UAH } from "../constants/action-types";


export const total = (state={}, action) => {

    const getTotalForCurrency = (items, currency) => {
        return state.balanceItems.filter(item => item.currency === currency).reduce(
            (prev, curr) => {
                return prev + (curr.balanceType === 'INCOME' ? curr.amount : - curr.amount)
            }, 0
        )
    };

    switch (action.type) {
        case GET_TOTAL_USD:
            return {
                ...state,
                total: getTotalForCurrency(state.balanceItems, 'USD')
            };
        case GET_TOTAL_UAH:
            return {
                ...state,
                total: getTotalForCurrency(state.balanceItems, 'UAH')
            }
    }
};


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


