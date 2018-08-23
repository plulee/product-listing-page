import React from "react";
import * as colorsNames from "../constants/ColorsNames";
import * as categories from "../constants/Categories";
import * as filterTypes from "../constants/FilterTypes";
import Dropdown from "../containers/Dropdown";

const ChooseFilter = () => {
    return (
        <section className="filters">
            <span className="filters__title">filters:</span>
            <Dropdown filters={categories} type={filterTypes.CATEGORIES} />
            <Dropdown filters={colorsNames} type={filterTypes.COLORS} />
        </section>
    );
};

export default ChooseFilter;
