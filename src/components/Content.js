import React, { Component } from 'react';
import '../styles/styles.css'
import {Header} from "semantic-ui-react";

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
