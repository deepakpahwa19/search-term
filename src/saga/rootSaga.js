import { fork, all } from "@redux-saga/core/effects";
import searchTerm from './searchTerm';


function* rootSaga() {
    yield all([fork(searchTerm)]);
}

export default rootSaga;



// const url = 'https://api-demo.sentisum.com/api/v1/comments/textsearch?source=dhl-parcel&terms=safe&sentiment=all&apiKey=AU_WtVnh93Tixe_CNZqp';