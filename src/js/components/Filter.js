import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleButtonClick () {
        const changeFilter = function(){
            const currentState = this.state.active;
            if (currentState) {
                this.props.removeFilterFunc();
                this.setState({ active: false });
            } else {
                this.props.addFilterFunc();
                this.setState({ active: true });
            }
            this.props.loading(!this.props.loadingIndicator);
        };

        this.props.loading(!this.props.loadingIndicator);
        setTimeout(changeFilter.bind(this), 1200);

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
    loading: PropTypes.func.isRequired,
    loadingIndicator: PropTypes.bool
};

export default Filter;
