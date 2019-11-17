import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { TopFeatures } from '../index';
import { SentenceList } from '../index';


export const Main = () => {

    const loading = useSelector(state => state.loading);
    const errorMessage = useSelector(state => state.errorMessage);

    return (
        <MainComponent>
            <Switch>
                <Route path="/" exact component={() => <TopFeatures loading={loading} errorMessage={errorMessage} />}></Route>
                <Route path="/sentences" component={() => <SentenceList loading={loading} errorMessage={errorMessage} />}></Route>
            </Switch>
        </MainComponent>
    )
}



const MainComponent = styled.main`
    margin: auto;
    margin-top: 8rem;
    overflow-y: hidden;
`;