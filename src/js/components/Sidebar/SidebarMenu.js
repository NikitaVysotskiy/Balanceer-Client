import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import '../../../styles/styles.css'


class SidebarMenu extends Component {
    render() {
        return (
            <div>
                <Menu.Item name='home'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item name='income'>
                    <Icon name='line chart' />
                    Income
                </Menu.Item>
                <Menu.Item name='expense'>
                    <Icon name='credit card alternative' />
                    Expense
                </Menu.Item>
                <Menu.Item name='profile'>
                    <Icon name='user circle' />
                    Profile
                </Menu.Item>
                <Menu.Item name='currency-converter'>
                    <Icon name='dollar'/>
                    Currency Converter
                </Menu.Item>

            </div>
        )
    }
}

export default SidebarMenu;
