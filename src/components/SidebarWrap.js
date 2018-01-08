import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

import Content from './Content'

class SidebarWrap extends Component {

    render() {
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        width='thin'
                        visible={this.props.visible}
                        icon='labeled'
                        vertical
                        inverted
                    >
                        <Menu.Item name='home'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Content/>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default SidebarWrap;
