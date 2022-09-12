import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Row from "../../layout/Row/Row";
import "./AllProducts.css";

class AllProducts extends Component {
  constructor(props) {
    super(props);
    const { allProducts, getId, currentCurrency } = props;
    this.state = {
      allProducts: allProducts,
      getId: getId,
      cardBtn: false,
      currentCurrency: currentCurrency,
    };
  }

  render() {
    return (
      <div>
        AllProducts
        <Row>
          {this.state.allProducts.data.map((item, index) => (
            <Link to={item.inStock ? "/information" : ""} key={index}>
              <Card
                currentCurrency={this.state.currentCurrency}
                getId={this.state.getId}
                product={item}
                key={index}
              />
            </Link>
          ))}
        </Row>
      </div>
    );
  }
}

export default AllProducts;
