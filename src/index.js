import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { balance, balanceItems } from "./reducers";

import './styles/index.css';

const initialState = {
    balanceItems: [
        {
            balanceType: "INCOME",
            currency: "uah",
            amount: "1500",
            source: "University grant",
            date: "2018-01-20"
        },
        {
            balanceType: "INCOME",
            currency: "uah",
            amount: "10000",
            source: "Salary",
            date: "2018-01-05"
        },
        {
           balanceType: "EXPENSE",
           currency: "uah",
           amount: "170",
           source: "Travel card",
           date: "2018-01-20"
        },
    ]
};

const store = createStore(
    combineReducers({
        balance,
        balanceItems
    }),
    initialState
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
