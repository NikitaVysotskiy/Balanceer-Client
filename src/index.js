import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { balance, balanceItems, currencies } from "./reducers";
import { UAH, USD, INCOME, EXPENSE } from "./constants/constants";

import './styles/index.css';


const initialState = {
    currencies: [UAH, USD],
    balanceItems: [
        {
            balanceType: INCOME,
            currency: UAH,
            amount: 1500,
            source: "University grant",
            date: "2018-01-20"
        },
        {
            balanceType: INCOME,
            currency: USD,
            amount: 700,
            source: "Salary",
            date: "2018-01-05"
        },
        {
           balanceType: EXPENSE,
           currency: UAH,
           amount: 170,
           source: "Travel card",
           date: "2018-01-20"
        },
    ]
};

const store = createStore(
    combineReducers({
        balance,
        balanceItems,
        currencies
    }),
    initialState
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
