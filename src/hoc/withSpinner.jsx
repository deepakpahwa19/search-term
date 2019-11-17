import React, { Component } from 'react';
import { Spinner, Message } from '../UI';

// HOC to display Spinner if data is loading from API calls
const withSpinner = (WrapperComp) => {

    return class extends Component {
        render() {
            const { errorMessage, loading } = this.props;

            if (errorMessage) {
                return <Message errorMessage={errorMessage} />
            }
            if (loading) {
                return <Spinner show={loading} />
            }
            return (
                <WrapperComp {...this.props} />
            )
        }
    }
}

export default withSpinner;