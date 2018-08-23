import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    render() {
        const handleButtonClick = () => {
            const currentState = this.state.active;
            if (currentState) {
                this.props.removeFilterFunc();
                this.setState({ active: false });
            } else {
                this.props.addFilterFunc();
                this.setState({ active: true });
            }
        };

        return (
            <li onClick={handleButtonClick} className={this.state.active ? "filters__menu-item filters__menu-item--active": "filters__menu-item"} >
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
