import React from "react";
import PropTypes from "prop-types";
import colorsHexes from "../constants/ColorsHexes";


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenVersion: 0,
        };
    }

    handleButtonClick (index) {
        this.setState({ chosenVersion: index });
    }

    render() {
        const name = this.props.name;
        const versions = this.props.versions;
        const chosenVersion = this.state.chosenVersion;
        const chosenVersionData = versions[chosenVersion];
        const imgUrl = chosenVersionData.url;
        const price = chosenVersionData.price;

        return (
            <div className="product">
                <img className="product__image" src={imgUrl} alt={name} />
                <div className="product__information">
                    <div className="product__name">{name}</div>
                    <div className="product__price">{price}</div>
                    {versions.map((version,index) =>
                        (
                            <button className="product__color-sample"
                                key={index}
                                onClick={()=> {this.handleButtonClick(index);}}
                                title={version.color}
                                style={{backgroundColor: colorsHexes.get(version.color)}}>
                            </button>
                        )
                    )}
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    versions: PropTypes.array.isRequired,
};

export default Product;
