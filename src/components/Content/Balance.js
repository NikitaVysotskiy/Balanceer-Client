import React, { Component } from 'react';
import { Header, Statistic, Segment } from 'semantic-ui-react';

import '../../styles/styles.css';

import BalanceButtons from './BalanceButtons';



class Balance extends Component {

    constructor (props) {
        super(props);
        this.state = {
            'balanceItems' : [
                {'currency': 'usd', 'amount': '1000'},
                {'currency': 'uah', 'amount': '5000'},
            ],
            'periodItems': [
                {'currency': 'usd', 'income': '1000', 'expense': '123', 'start': '2017-01-01', 'end': '2018-01-31'},
                {'currency': 'uah', 'income': '1000', 'expense': '123', 'start': '2017-01-01', 'end': '2018-01-31'},
            ],
        }
    }

    renderBalanceItems(balanceItems){
        return balanceItems.map((item, i) => (
            <Segment inverted key={i}>
                <Statistic inverted label={item.currency} value={item.amount} />
                <BalanceButtons />
            </Segment>
        ))
    }

    renderPeriodItems(periodItems){
        return (
            <div>
                {periodItems.map(JSON.stringify)}
            </div>
        )
    }

    render() {
        return (
            <Segment>
                <Header size='huge'>Current Balance</Header>
                {this.renderBalanceItems(this.state.balanceItems)}
            </Segment>
        )
    }
}

export default Balance;
