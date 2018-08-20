import { connect } from "react-redux";
import ChooseFilterComponent from "../components/ChooseFilter";
import { chooseColor } from "../actions";

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (color) => {
        dispatch(chooseColor(color));
    }
});

export const ChooseFilter = connect(mapStateToProps, mapDispatchToProps)(ChooseFilterComponent);
