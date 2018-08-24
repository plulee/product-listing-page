import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    handleButtonClick () {
        const currentState = this.state.active;
        if (currentState) {
            this.props.removeFilterFunc();
            this.setState({ active: false });
        } else {
            this.props.addFilterFunc();
            this.setState({ active: true });
        }
    }

    render() {
        const filterActiveClass = this.state.active ? "filters__menu-item--active": "";

        return (
            <li onClick={this.handleButtonClick.bind(this)}
                className={`filters__menu-item ${filterActiveClass}`}>
                {this.props.filterName}
            </li>
        );
    }
}

Filter.propTypes = {
    filterName: PropTypes.string.isRequired,
    addFilterFunc: PropTypes.func.isRequired,
    removeFilterFunc: PropTypes.func.isRequired,
};

export default Filter;
