import { connect } from 'react-redux';
import { Grid, Header, Statistic, Segment } from 'semantic-ui-react';
import React, { Component } from 'react';

import AddBalanceItemModal from "./AddBalanceItemModal";
import BalanceButtons from './BalanceButtons';
import { INCOME } from "../../constants/constants";
import RecentBalanceItems from "./RecentBalanceItems";

import '../../styles/styles.css';


const mapStateToProps =  state => {
    return {
        balanceItems: state.balanceItems,
        currencies: state.currencies,
        total: state.total
    }
};


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
        this.state = { modalOpen: false };
        this.showModal.bind(this);
        this.closeModal.bind(this);
    }

    showModal = type => () => this.setState({ type, modalOpen: true });
    closeModal = () => this.setState({ modalOpen: false });

    renderBalanceItem(currencies){
        return (currencies.map((currency, i) => {
            const filteredBalanceItems = filterBalanceItemsForCurrency(this.props.balanceItems, currency);
            const total = getTotalForCurrency(filteredBalanceItems, currency);
            const { modalOpen, type } = this.state;
            return (
                <Grid.Column width={8} key={i}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Segment inverted textAlign='center'>
                                    <Statistic inverted label={currency} value={total} />
                                    <BalanceButtons onClick={this.showModal} />
                                    <AddBalanceItemModal open={modalOpen} type={type} onClose={this.closeModal} />
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

export default connect(mapStateToProps)(Balance);
