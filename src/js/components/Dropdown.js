import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import onClickOutside from "react-onclickoutside";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    handleClickOutside (evt) {
          this.setState({
            active: false
          })
    }

    handleButtonClick () {
        const currentState = this.state.active;
        if (currentState) {
            this.setState({ active: false });
        } else {
            this.setState({ active: true });
        }
    }

    render() {
        const filterType = this.props.type;
        let opened = "";
        if (this.state.active) {
            opened = "opened";
        }
        return (
            <div className="filters__dropdown">
                <div onClick={() => {this.handleButtonClick()}} className="filters__filter-name">{filterType}{opened}</div>
                <ul className="dropdown">
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
