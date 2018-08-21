import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import * as colors from "../constants/Colors";
import * as categories from "../constants/Categories";
import * as filterTypes from "../constants/FilterTypes";

const ChooseFilter = (props) => {
    return (
        <section className="filters">
            {Object.values(categories).map((category,index) =>
                (
                    <Filter
                        key={index}
                        filterName ={category}
                        addFilterFunc = {() => {props.addFilter(category, filterTypes.CATEGORIES)}}
                        removeFilterFunc = {() => {props.removeFilter(category, filterTypes.CATEGORIES)}}
                    />
                )
            )}
            {Object.values(colors).map((color,index) =>
                (
                    <Filter
                        key={index}
                        filterName ={color}
                        addFilterFunc = {() => {props.addFilter(color, filterTypes.COLORS)}}
                        removeFilterFunc = {() => {props.removeFilter(color, filterTypes.COLORS)}}
                    />
                )
            )}
        </section>
    );
};

ChooseFilter.propTypes = {
    filters: PropTypes.shape({
        colors: PropTypes.array.isRequired,
        categories: PropTypes.array.isRequired,
    }).isRequired,
    addFilter: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired
};

export default ChooseFilter;
