
import initialState from '../initialState';
import { SET_TOP_50, LOADING } from '../actions/actionTypes';

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TOP_50:
            // console.log(action.topFeatures);
            console.log(action.sentences);
            console.log(Object.keys(action.sentences));
            const sortedFeatures = getTop50Sorted(action.topFeatures);
            // console.log('sortedFeatures ====>>>', sortedFeatures);
            return {
                ...state,
                topFeatures: sortedFeatures,
                sentences: action.sentences,
                loading: false
            }
        case LOADING:
            return { 
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default reducer;


const getTop50Sorted = (topFeatures) => {
    const arr = [];
    for (let feature in topFeatures) {
        arr.push([feature, topFeatures[feature]]);
    }
    arr.sort((a, b) => b[1] - a[1]);
    return arr.length > 50 ? arr.slice(0, 50) : arr;
}