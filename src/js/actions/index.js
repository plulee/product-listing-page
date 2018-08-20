import * as types from "../constants/ActionTypes";

export const add_color_filter = color => ({
    type: types.ADD_COLOR_FILTER,
    color
});

export const add_category_filter = category => ({
    type: types.ADD_CATEGORY_FILTER,
    category
});

export const remove_color_filter = color => ({
    type: types.REMOVE_COLOR_FILTER,
    color
});

export const remove_category_filter = category => ({
    type: types.REMOVE_CATEGORY_FILTER,
    category
});
