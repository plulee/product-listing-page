import { combineReducers } from "redux";
import filters from "./filters";
import loading from "./loading";


const rootReducer = combineReducers({
    filters,
    loading
});

export default rootReducer;
