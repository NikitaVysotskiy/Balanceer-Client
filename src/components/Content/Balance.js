import {connect} from 'react-redux';
import { Header, Statistic, Segment } from 'semantic-ui-react';
import React, { Component } from 'react';

// import BalanceButtons from './BalanceButtons';

import '../../styles/styles.css';



const mapStateToProps =  state => {
    return {
        balanceItems: state.balanceItems
    }
};


class Balance extends Component {

    renderBalanceItems(){
        return this.props.balanceItems.map((item, i) => (
            <Segment inverted key={i}>
                <Statistic inverted label={item.currency} value={item.amount} />
                {/*<BalanceButtons />*/}
            </Segment>
        ))
    }

    render() {
        return (
            <Segment>
                <Header size='huge'>Current Balance</Header>
                {this.renderBalanceItems()}
            </Segment>
        )
    }
}

export default connect(mapStateToProps)(Balance);
