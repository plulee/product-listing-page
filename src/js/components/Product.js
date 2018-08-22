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


    render() {

        const name = this.props.name;
        const id = this.props.id;
        const versions = this.props.versions;
        const versionId = this.state.chosenVersion;
        const version = versions[versionId];
        const imgUrl = version.url;
        const price = version.price;

        return (
            <div key = {id}>
                <img src={imgUrl} alt={name} />
                {name}
                <br/>
                {price}
                {versions.map((version,index) =>
                    (
                        <div style={{color: colorsHexes.get(version.color)}}>{index}</div>
                    )
                )}
            </div>
        );
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    versions: PropTypes.array.isRequired,
};

export default Product;
