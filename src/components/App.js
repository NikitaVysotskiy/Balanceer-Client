import React, { Component } from 'react';

// import SidebarWrap from './Sidebar/SidebarWrap'
import HeaderMenu from './HeaderMenu'
import Content from "./Content/Content";


class App extends Component {

    constructor (props) {
        super(props);
        this.state = { visible: true };
        this.toggleSidebarVisibility = this.toggleSidebarVisibility.bind(this);
    }

    toggleSidebarVisibility () {
        this.setState({visible: !this.state.visible});
    };

    render() {
        // const visible = this.state.visible;
        return (
            <div>
                <HeaderMenu toggleSidebarVisibility={this.toggleSidebarVisibility} />
                {/*<SidebarWrap visible={visible} />*/}
                <Content />
            </div>
        )
    }
}

export default App;
