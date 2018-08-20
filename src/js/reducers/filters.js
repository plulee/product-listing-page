import * as types from "../constants/ActionTypes";

const initialState = {
    colors: ['red','green'],
    categories: ['cars']
};

const filters = (state = {...initialState}, action) => {
    switch (action.type) {
    case types.ADD_COLOR_FILTER:
        return {
            ...state,
            colors: action.color
        };
    case types.ADD_CATEGORY_FILTER:
        return {
            ...state,
            categories: action.category
        };
    case types.REMOVE_COLOR_FILTER:
        return {
            ...state,
            colors: action.color
        };
    case types.REMOVE_CATEGORY_FILTER:
        return {
            ...state,
            categories: action.category
        };
    default:
        return state;
    }
};

export default filters;
