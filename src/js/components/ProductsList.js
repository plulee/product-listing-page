import React from "react";
import PropTypes from "prop-types";
import products from "../constants/Products";
import Product from "./Product";

const ProductsList = props => {
    const filters = props.filters;
    const loadingIndicator = props.loadingIndicator;

    const checkFilterElements = (filteredArray, filterArray) => {
        if (filterArray.length > 0) {
            return filteredArray.some(element => filterArray.indexOf(element) >= 0);
        } else {
            return true;
        }
    };

    const filteredProducts = products.filter(
        product => {
            let productColors = [];
            for (let version of product.versions) {
                productColors.push(version.color);
            }

            const checkColors = checkFilterElements(productColors, filters.colors);
            const checkCategories = checkFilterElements(product.categories, filters.categories);

            return (checkColors && checkCategories);
        }
    );

    if (loadingIndicator) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <section className="products">
            {filteredProducts.map(product =>
                (
                    <Product
                        key = {product.id}
                        versions = {product.versions}
                        name = {product.name}
                    />
                )
            )}
        </section>
    );
};

ProductsList.propTypes = {
    filters: PropTypes.shape({
        colors: PropTypes.array.isRequired,
        categories: PropTypes.array.isRequired,
    }).isRequired,
    loadingIndicator: PropTypes.bool
};

export default ProductsList;
