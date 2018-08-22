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
    };

    render() {


        const name = this.props.name;
        const versions = this.props.versions;
        const versionId = this.state.chosenVersion;
        const version = versions[versionId];
        const imgUrl = version.url;
        const price = version.price;

        return (
            <div>
                <img src={imgUrl} alt={name} />
                {name}
                <br/>
                {price}
                {versions.map((version,index) =>
                    (
                        <button key={index} onClick={()=> {this.handleButtonClick(index)}} style={{color: colorsHexes.get(version.color)}}>{index}</button>
                    )
                )}
            </div>
        );
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    versions: PropTypes.array.isRequired,
};

export default Product;
