import * as types from "../constants/ActionTypes";

const initialState = {
    loadingIndicator: false,
};

const loading = (state = {...initialState}, action) => {
    switch (action.type) {
    case types.LOADING:
        return {
            ...state,
            loadingIndicator: action.loadingIndicator
        };
    default:
        return state;
    }
};

export default loading;
