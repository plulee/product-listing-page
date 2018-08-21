import React from "react";
import PropTypes from "prop-types";

const ProductsList = (props) => {
    const { colors, categories } = props.filters;

    return (
        <section className="products">
            { colors }
            { categories }
        </section>
    );
};

ProductsList.propTypes = {
    filters: PropTypes.shape({
        colors: PropTypes.array.isRequired,
        categories: PropTypes.array.isRequired,
    }).isRequired
};

export default ProductsList;
