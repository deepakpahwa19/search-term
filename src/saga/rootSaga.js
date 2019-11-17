import { fork, all } from "@redux-saga/core/effects";
import searchTermSaga from './searchTermSaga';

function* rootSaga() {
    yield all([fork(searchTermSaga)]);
}

export default rootSaga;