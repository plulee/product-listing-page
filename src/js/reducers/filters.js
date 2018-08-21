import * as types from "../constants/ActionTypes";

const initialState = {
    colors: [],
    categories: []
};

const filters = (state = {...initialState}, action) => {
    switch (action.type) {
    case types.ADD_FILTER:
        {
            const newState = {...state};
            newState[action.filterType] = [...new Set([...state[action.filterType], action.feature])]
            return newState;
        }

    case types.REMOVE_FILTER:
        {
            const newState = {...state};
            newState[action.filterType] = state[action.filterType].filter(feature => feature !== action.feature)
            return newState;
        }
    default:
        return state;
    }
};

export default filters;
