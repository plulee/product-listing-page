import React, { Component } from "react";
import ErrorBoundary from "react-error-boundary";
import { ProductsList } from "../containers/ProductsList";

class App extends Component {
    render() {
        return (
            <div className="container">
                <ErrorBoundary>
                    <h1>Product Listing Page</h1>
                    <main>
                        <ProductsList />
                    </main>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;
