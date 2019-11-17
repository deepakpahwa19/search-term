import React, { PureComponent } from 'react';

import { Navbar, Main } from '../index';

class Layout extends PureComponent {
    state = {
        navbarOpen: false
    }

    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {
        return (
            <>
                <Navbar  
                navbarState={this.state.navbarOpen}
                handleNavbar={this.handleNavbar}
                />
                <Main />
            </>
        )
    }
}

export default Layout;