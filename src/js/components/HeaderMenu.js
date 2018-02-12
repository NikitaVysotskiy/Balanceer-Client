import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

import '../../styles/styles.css'

import Avatar from './Avatar';


class HeaderMenu extends Component {
    render() {
        return (
            <Menu secondary>
                <Menu.Menu>
                    <Menu.Item id='toggleButtonWrap'>
                        <Button onClick={this.props.toggleSidebarVisibility}>
                            <Button.Content hidden>
                                <Icon name='sidebar' />
                            </Button.Content>
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Avatar />
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Menu.Item name='logout'>
                        <Icon name='sign out' />
                        <span>Sign out</span>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default HeaderMenu;
