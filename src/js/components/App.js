import React from "react";
import ErrorBoundary from "react-error-boundary";
import ProductsList from "../containers/ProductsList";
import ChooseFilter from "./ChooseFilter";

const App = () =>  (
        <div className="container">
            <ErrorBoundary>
                <h1>Product Listing Page</h1>
                <ChooseFilter />
                <ProductsList />
            </ErrorBoundary>
        </div>
);

export default App;
