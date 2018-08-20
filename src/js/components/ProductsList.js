import React from "react";
import PropTypes from "prop-types";

const ProductsList = (props) => (
    <section className="products">
        { props.filters.colors[0] }
    </section>
);

ProductsList.propTypes = {
    filters: PropTypes.shape({
        colors: PropTypes.array.isRequired,
        categories: PropTypes.array.isRequired,
    }).isRequired
};

export default ProductsList;
