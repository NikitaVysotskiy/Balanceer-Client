import React, { Component } from 'react';
import {Header} from "semantic-ui-react";

import '../styles/styles.css'


class Content extends Component {

    render() {
        return (
            <div id='content'>
                <Header as='h2'>Balance</Header>
                <Header as='h3'>USD</Header>
                <Header as='h3'>UAH</Header>

            </div>
        )
    }
}

export default Content;
