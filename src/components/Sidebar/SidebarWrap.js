import React, { Component } from 'react';
import { Sidebar, Segment, Menu } from 'semantic-ui-react'

import Content from '../../Content/Content'
import SidebarMenu from './SidebarMenu'

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
                        <SidebarMenu />
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
