import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './store/reducers/reducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootSaga from './saga/rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
