import React from "react";
import PropTypes from "prop-types";
import products from "../constants/Products";
import Product from "./Product";

const ProductsList = props => {
    const filters = props.filters;

    const checkFilterElements = (filteredArray, filterArray) => {
        if (filterArray.length > 0) {
            return filteredArray.some(element => filterArray.indexOf(element) >= 0)
        } else {
            return true;
        }
    };

    const filteredProducts = products.filter(
        product => {
            let productColors = [];
            for (let version of product.versions) {
                productColors.push(version.color)
            }
            const checkColors = checkFilterElements(productColors, filters.colors);
            const checkCategories = checkFilterElements(product.categories, filters.categories);

            return (checkColors && checkCategories);
        }
    );

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
    }).isRequired
};

export default ProductsList;
