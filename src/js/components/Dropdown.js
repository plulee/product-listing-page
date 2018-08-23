import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import onClickOutside from "react-onclickoutside";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        };
    }

    handleClickOutside (evt) {
          this.setState({
            opened: false
          })
    }

    handleButtonClick () {
        const currentState = this.state.opened;
        if (currentState) {
            this.setState({ opened: false });
        } else {
            this.setState({ opened: true });
        }
    }

    render() {
        const filterType = this.props.type;
        const dropdownToggledClass = this.state.opened ? "filters__dropdown-toggle--opened": "";

        return (
            <div className="filters__dropdown">
                <div className={`filters__dropdown-toggle ${dropdownToggledClass}`} onClick={() => {this.handleButtonClick()}} >{filterType}</div>
                <ul className="filters__menu-items">
                    {Object.values(this.props.filters).map((filter,index) =>
                        (
                            <Filter
                                key={index}
                                filterName ={filter}
                                addFilterFunc = {() => {this.props.addFilter(filter, filterType)}}
                                removeFilterFunc = {() => {this.props.removeFilter(filter, filterType)}}
                            />
                        )
                    )}
                </ul>
            </div>
        );
    }
};

Dropdown.propTypes = {
    filters: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    addFilter: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired
};

export default onClickOutside(Dropdown);
