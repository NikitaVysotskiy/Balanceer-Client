import React, { Component } from 'react';

import '../styles/styles.css'

import BalanceButtons from './BalanceButtons'



class Balance extends Component {

    constructor (props) {
        super(props);
        this.state = {
            'balanceItems' : [
                {'currency': 'usd', 'amount': '1000'},
                {'currency': 'uah', 'amount': '5000'},
            ]
        }
    }

    renderBalanceItems(balanceItems){
        return balanceItems.map((item, i) => (
            <div key={i}>
                <strong>{item.currency.toUpperCase()}: </strong>
                <strong>{item.amount.toUpperCase()}</strong>

                <BalanceButtons key={i} />
            </div>
        ))
    }

    render() {
        return (
            <div id='content'>
                {this.renderBalanceItems(this.state.balanceItems)}
            </div>
        )
    }
}

export default Balance;
