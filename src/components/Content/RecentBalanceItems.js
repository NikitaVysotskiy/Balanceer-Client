import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';

import '../../styles/styles.css'
import {INCOME} from "../../constants/constants";


class RecentBalanceItems extends Component {
    // TODO: sort by date, display 5 most recent, group by date
    render() {
        const balanceItems = this.props.balanceItems;
        return (
            <List>
                {balanceItems.map(item => (
                    <List.Item>
                        {item.balanceType === INCOME ?
                            <Icon size="big" color="green" name="plus"/> :
                            <Icon size="big" color="red" name="minus"/>
                        }

                        <List.Content>
                            <List.Header size='big'>{item.amount}</List.Header>
                            <b>{item.date}</b>: {item.source}
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        )
    }
}

export default RecentBalanceItems;
