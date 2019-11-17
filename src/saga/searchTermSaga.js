
import { takeLatest, put } from "@redux-saga/core/effects";

import axiosInstance from '../services/axiosInstance';
import { HEADER_SENTIMENT, HEADER_SOURCE, HEADER_API_KEY } from '../utils/constants';
import * as reducerActionTypes from '../store/actions/actionTypes';
import { ANOTHER_TERM, SERVER_ERROR, BAD_REQUEST } from '../utils/errorMessages';
import { GET_STRINGS } from './actionTypes/sagaActionTypes';
import { isArray } from "util";

export default function* searchTermSaga() {
    // Dispatching 'GET_STRINGS' will trigger getStrings generator
    yield takeLatest(GET_STRINGS, getStrings);
}

function* getStrings(action) {
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
        // if error occures then dispatch ERROR action to reducer
        yield put({
            type: reducerActionTypes.ERROR,
            message: SERVER_ERROR
        })
        return;
    }

    // if there is some error at server and data is returned as an emtpy array
    if (isArray(response.data) && !response.data.length) {
        yield put({
            type: reducerActionTypes.ERROR,
            message: BAD_REQUEST
        })
    } else if (Object.entries(response.data).length && Object.entries(response.data.topFeatures).length !== 0) {
        // if response has topFeatures then dispatch SET_TOP_50 action to reducer
        yield put({
            type: reducerActionTypes.SET_TOP_50,
            topFeatures: response.data.topFeatures,
            sentences: response.data.sentences
        })
    } else {
        // if response has topFeatures with zero lenght then dispatch ERROR action to reducer
        yield put({
            type: reducerActionTypes.ERROR,
            message: ANOTHER_TERM
        })
    }

}