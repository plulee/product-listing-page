import React from "react";
import PropTypes from "prop-types";
import products from "../constants/Products";

const ProductsList = props => {
    const { colors, categories } = props.filters;

    const checkFilterElements = (filteredArray, filterArray) => {
        if (filterArray.length > 0) {
            return filteredArray.some(element => filterArray.indexOf(element) >= 0)
        } else {
            return true;
        }
    };

    const filteredProducts = products.filter(
        product => {
            const checkCategories = checkFilterElements(product.categories, categories);
            const checkColors = checkFilterElements(product.colors, colors);

            if (checkColors && checkCategories) {
                return true;
            }
        }
    );

    return (
        <section className="products">
            {filteredProducts.map(product =>
                (
                    <div key = {product.id}>
                        {product.name}
                    </div>

                )
            )}
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
