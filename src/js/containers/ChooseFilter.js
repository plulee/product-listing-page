import { connect } from "react-redux";
import ChooseFilterComponent from "../components/ChooseFilter";
import { addFilter, removeFilter} from "../actions";

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    addFilter: (feature, filterType) => {
        dispatch(addFilter(feature, filterType));
    },
    removeFilter: (feature, filterType) => {
        dispatch(removeFilter(feature, filterType));
    },
});

export const ChooseFilter = connect(mapStateToProps, mapDispatchToProps)(ChooseFilterComponent);
