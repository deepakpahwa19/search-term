import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import TopFeatures from '../components/topFeatures/TopFeatures';
import Sentences from '../components/Sentences';
import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar';

class Main extends PureComponent {

    render() {
        const { topFeatures, sentences } = this.props;
        return (
            <MainComponent>
                <Switch>
                    <Route path="/" exact component={() => <TopFeatures features={topFeatures} />}></Route>
                    <Route path="/sentences" component={() => <Sentences sentences={sentences ? Object.keys(sentences) : sentences} />}></Route>
                </Switch>
            </MainComponent>
        )
    }

}

const mapStateToProps = state => {
    return {
        topFeatures: state.topFeatures,
        sentences: state.sentences
    }

}

export default connect(mapStateToProps, null)(Main);

const MainComponent = styled.main`
    margin: auto;
    margin-top: 8rem;
    overflow-y: hidden;
`;