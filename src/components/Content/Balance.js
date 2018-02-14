import { connect } from 'react-redux';
import { Grid, Header, Statistic, Segment } from 'semantic-ui-react';
import React, { Component } from 'react';

import AddBalanceItemModal from "./AddBalanceItemModal";
import BalanceButtons from './BalanceButtons';
import {INCOME} from "../../constants/constants";
import RecentBalanceItems from "./RecentBalanceItems";
import {ADD_BALANCE, UPDATE_BALANCE_FIELD} from "../../constants/action-types";

import '../../styles/styles.css';


const mapStateToProps =  state => {
    return {
        balance: state.balance,
        balanceItems: state.balanceItems,
        currencies: state.currencies,
        total: state.total
    }
};


const mapDispatchToProps = dispatch => ({
    onSubmit: payload => dispatch({type: ADD_BALANCE, ...payload}),
    onUpdateField: (key, value) => dispatch({type: UPDATE_BALANCE_FIELD, key, value})
});


const filterBalanceItemsForCurrency = (items, currency)  => {
    return items.filter(item => item.currency === currency)
};


const getTotalForCurrency = (items) => {
    return items.reduce(
        (prev, curr) => {
            return prev + (curr.balanceType === INCOME ? curr.amount : - curr.amount)
        }, 0
    )
};


class Balance extends Component {

    constructor(props) {
        super(props);

        const updateFieldEvent = key => ev => {
            this.props.onUpdateField(key, ev.target.value)
        };
        this.changeAmount = updateFieldEvent('amount');
        this.changeSource = updateFieldEvent('source');

        this.submitForm = ev => {
            ev.preventDefault();
            const balanceItem = {
                balanceType: this.state.type,
                currency: this.state.currency,
                amount: parseFloat(this.props.balance.amount),
                source: this.props.balance.source,
                // TODO: correct format
                date: new Date().toLocaleDateString().split('/').join('-')
            };

            this.props.onSubmit(balanceItem);
            this.closeModal();

        };


        this.state = { modalOpen: false };
        this.showModal.bind(this);
        this.closeModal.bind(this);
    }

    showModal = (type, currency) => () => this.setState({ type, currency, modalOpen: true });
    closeModal = () => this.setState({ modalOpen: false });

    renderBalanceItem(currencies){
        return (currencies.map((currency, i) => {
            const filteredBalanceItems = filterBalanceItemsForCurrency(this.props.balanceItems, currency);
            const total = getTotalForCurrency(filteredBalanceItems, currency);
            const { modalOpen } = this.state;
            return (
                <Grid.Column width={8} key={i}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Segment inverted textAlign='center'>
                                    <Statistic inverted label={currency} value={total} />
                                    <BalanceButtons onClick={this.showModal} currency={currency}/>
                                    <AddBalanceItemModal
                                        open={modalOpen}
                                        onClose={this.closeModal}
                                        amount={this.props.amount}
                                        source={this.props.source}
                                        changeAmount={this.changeAmount}
                                        changeSource={this.changeSource}
                                        submitForm={this.submitForm}
                                    />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <RecentBalanceItems balanceItems={filteredBalanceItems}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            )
        }));
    }

    render() {
        return (
            <Segment>
                <Header size='huge'>Current Balance</Header>
                <Grid>
                    <Grid.Row>
                        {this.renderBalanceItem(this.props.currencies)}
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
