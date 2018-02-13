import { connect } from 'react-redux';
import { Header, Statistic, Segment } from 'semantic-ui-react';
import React, { Component } from 'react';

import BalanceButtons from './BalanceButtons';
import { INCOME } from "../../constants/constants";

import '../../styles/styles.css';


const mapStateToProps =  state => {
    return {
        balanceItems: state.balanceItems,
        currencies: state.currencies,
        total: state.total
    }
};


const getTotalForCurrency = (items, currency) => {
    return items.filter(item => item.currency === currency).reduce(
        (prev, curr) => {
            return prev + (curr.balanceType === INCOME ? curr.amount : - curr.amount)
        }, 0
    )
};


class Balance extends Component {

    renderBalanceItem(currencies){
        return (currencies.map((currency, i) => {
            const total = getTotalForCurrency(this.props.balanceItems, currency);
            return (
                <Segment inverted key={i}>
                    <Statistic inverted label={currency} value={total} />
                    <BalanceButtons />
                </Segment>
            )
        }));
    }

    render() {
        return (
            <Segment>
                <Header size='huge'>Current Balance</Header>
                {this.renderBalanceItem(this.props.currencies)}
            </Segment>
        )
    }
}

export default connect(mapStateToProps)(Balance);
