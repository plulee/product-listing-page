import { connect } from "react-redux";
import ProductsListComponent from "../components/ProductsList";

const mapStateToProps = state => ({
    filters: state.filters,
});

const ProductsList = connect(mapStateToProps, () => ({}))(ProductsListComponent);

export default ProductsList;
