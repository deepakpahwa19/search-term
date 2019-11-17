
import initialState from '../initialState';
import { SET_TOP_50, LOADING, ERROR } from '../actions/actionTypes';

/*
    This reducer has three action.type to update the state
    1. To update state when API is returning data
    2. To update Loading status to display spinner when fetching data from API
    3. To display the error message when error occurs
*/
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_50:
            const sortedFeatures = getTop50Sorted(action.topFeatures);
            return {
                ...state,
                errorMessage: '',
                topFeatures: sortedFeatures,
                sentences: action.sentences,
                loading: false,
            }
        case LOADING:
            return {
                ...state,
                errorMessage: '',
                loading: true
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                topFeatures: {},
                sentences: {},
                errorMessage: action.message,
            }
        default:
            return state;
    }
}

export default reducer;


// To get the top 50 topfeatures sorted in descending error
const getTop50Sorted = (topFeatures) => {
    const arr = [];
    for (let feature in topFeatures) {
        arr.push([feature, topFeatures[feature]]);
    }
    arr.sort((a, b) => b[1] - a[1]);
    return arr.length > 50 ? arr.slice(0, 50) : arr;
}