import { connect } from "react-redux";
import ProductsListComponent from "../components/ProductsList";

const mapStateToProps = state => ({
    filters: state.filters,
});

export const ProductsList = connect(mapStateToProps, () => ({}))(ProductsListComponent);
