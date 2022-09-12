import React, { Component } from "react";
import Col from "../../layout/Col/Col";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    const { getId, product, currentCurrency } = props;
    this.state = {
      currentCurrency: currentCurrency,
      size: product.attributes[0],
      name: product.name,
      gallery: product.gallery[0],
      prices: product.prices,
      currency: product.prices[0].currency.symbol,
      id: product.id,
      inStock: product.inStock,
      getId: getId,
      cardBtn: false,
    };
  }

  showCardBtn() {
    this.setState({ cardBtn: !this.state.cardBtn });
  }

  render() {
    const item = this.state.prices.map((item) =>
      item.currency.label === this.state.currentCurrency ? item : ""
    );
    return (
      <Col>
        <div
          className={`productCard ${this.state.inStock ? "" : "soldProduct"}`}
          onClick={() => this.state.getId(this.state.id)}
          onMouseOver={() => this.showCardBtn()}
          onMouseOut={() => this.showCardBtn()}
        >
          <img
            className="productImage"
            src={this.state.gallery}
            alt="products"
          />
          <div
            onClick={() => this.state.getId(this.state.id)}
            className={`cardButton ${this.state.cardBtn ? "" : "hidden"}`}
          >
            <span className="icon icon-card"></span>
          </div>
          <h3 className="productName">{this.state.name}</h3>
          <h4 className="productPrice">
            {item.map((item) => item && item.currency.symbol)} <span> </span>
            {item.map((item) => item && item.amount)}
          </h4>
        </div>
      </Col>
    );
  }
}

export default Card;
