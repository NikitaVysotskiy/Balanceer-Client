import React, { Component } from 'react';
import {Header} from "semantic-ui-react";

import '../styles/styles.css'


class Content extends Component {

    render() {
        return (
            <div id='content'>
                <Header as='h3'>Application Content</Header>
            </div>
        )
    }
}

export default Content;
