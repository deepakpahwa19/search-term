import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TopFeatures from './features/TopFeatures';
import SentenceList from './sentences/SentenceList';


const Main = () => {

    const loading = useSelector(state => state.loading);

    return (
        <MainComponent>
            <Switch>
                <Route path="/" exact component={() => <TopFeatures loading={loading} />}></Route>
                <Route path="/sentences" component={() => <SentenceList loading={loading} />}></Route>
            </Switch>
        </MainComponent>
    )
}


export default Main;

const MainComponent = styled.main`
    margin: auto;
    margin-top: 8rem;
    overflow-y: hidden;
`;