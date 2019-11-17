import React, { Component } from 'react';
import { Spinner } from '../UI/Spinner';

const withSpinner = (WrapperComp) => {

    return class extends Component {
        render() {
            if (this.props.loading) {
                return <Spinner show={this.props.loading} />
            }
            return (
                <WrapperComp {...this.props} />
            )
        }
    }
}

export default withSpinner;