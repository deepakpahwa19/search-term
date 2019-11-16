
import { takeLatest, put } from "@redux-saga/core/effects";
import axiosInstance from '../services/axiosInstance';

import { HEADER_SENTIMENT, HEADER_SOURCE, HEADER_API_KEY } from '../config/constants';
import * as reducerActionTypes from '../store/actions/actionTypes';

export default function* searchTerm() {
    console.log('Saga is running');
    yield takeLatest('GET_STRINGS', getStrings);
}

function* getStrings(action) {
    yield console.log('My saga is running action: ====>>>>', action);
    let response = {};
    try {
        response = yield axiosInstance.get('/textsearch', {
            params: {
                source: HEADER_SOURCE,
                terms: action.terms,
                sentiment: HEADER_SENTIMENT,
                apiKey: HEADER_API_KEY
            }
        })
    } catch (exception) {
        yield put({
            type: 'ERROR',
            message: 'Seems to be an issue at server side'
        })
        return;
    }
    if (Object.entries(response.data.topFeatures).length !== 0) {
        console.log(response);
        yield put({
            type: reducerActionTypes.SET_TOP_50,
            topFeatures: response.data.topFeatures,
            sentences: response.data.sentences
        })
    } else {
        yield put({
            type: 'ERROR',
            message: 'Please enter valid input'
        })
    }

}