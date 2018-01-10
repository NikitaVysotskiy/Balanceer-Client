import React, { Component } from 'react';

import '../styles/styles.css'

import Balance from './Balance';


class Content extends Component {

    render() {
        return (
            <div id='content'>
                <Balance />
            </div>
        )
    }
}

export default Content;
