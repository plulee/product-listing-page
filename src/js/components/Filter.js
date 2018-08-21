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
            <button onClick={handleButtonClick} className={this.state.active ? 'active': null} >
                <div>filter</div>
                <strong>{this.props.filterName}</strong>
            </button>
        );
    }
}

Filter.propTypes = {
    filterName: PropTypes.string.isRequired,
    addFilterFunc: PropTypes.func.isRequired,
    removeFilterFunc: PropTypes.func.isRequired,
};

export default Filter;
