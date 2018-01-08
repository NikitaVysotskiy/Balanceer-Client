import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Icon, Header } from 'semantic-ui-react'

import Content from './Content'

class App extends Component {

    state = { visible: true };

    toggleVisibility = () => {
        this.setState({visible: !this.state.visible});
    };

    render() {
        const { visible } = this.state;
        return (
            <div>

                <Button onClick={this.toggleVisibility}>
                    <Icon name='sidebar' />
                </Button>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
                        <Menu.Item name='home'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                            <Content/>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default App;
