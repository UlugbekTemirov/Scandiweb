import React, { Component, Fragment } from "react";
import Col6 from "../../layout/Col/Col6";
import Col4 from "../../layout/Col/Col4";
import Rowproduct from "../../layout/Row/RowProduct";
import customImg from "../../images/imgNotFound.jpg";
import "./ProductInfo.css";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    const { data, currentCurrency, getCardProd, getCardAttr } = props;
    this.state = {
      data,
      currentCurrency: currentCurrency,
      getCardProd: getCardProd,
      getCardAttr: getCardAttr,
    };
  }

  render() {
    const item = this.state.data.prices.map((item) =>
      item.currency.label === this.state.currentCurrency ? item : ""
    );
    return (
      <div className="productInfo">
        <Rowproduct>
          <Col6>
            <div className="imageSection">
              <div className="leftSideImages">
                <div>
                  <img
                    src={this.state.data.gallery[1] || customImg}
                    alt={this.state.data.name}
                  />
                </div>
                <div>
                  <img
                    src={this.state.data.gallery[2] || customImg}
                    alt={this.state.data.name}
                  />
                </div>
                <div>
                  <img
                    src={this.state.data.gallery[3] || customImg}
                    alt={this.state.data.name}
                  />
                </div>
              </div>
              <div className="mainImg">
                <img
                  src={this.state.data.gallery[0] || customImg}
                  alt={this.state.data.name}
                />
              </div>
            </div>
          </Col6>
          <Col4>
            <div className="infoSection">
              <h3 className="nameofProduct">{this.state.data.name}</h3>
              <table className="infoTab">
                <tbody>
                  {this.state.data.attributes.map((item, ind) => (
                    <Fragment key={ind}>
                      <tr>
                        <th>{item.name}</th>
                      </tr>
                      <tr>
                        <td className="optionsMenu">
                          {item.items.map((prod, index) => (
                            <Fragment key={index}>
                              <input
                                id={item.id + index}
                                name={item.id}
                                type="radio"
                                className="hidden optionRadio"
                              />
                              <label
                                onClick={() => this.state.getCardAttr(prod)}
                                htmlFor={item.id + index}
                                className="selectOption"
                              >
                                {prod.displayValue}
                              </label>
                            </Fragment>
                          ))}
                        </td>
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
              <h3 className="nameOfOption">Price:</h3>
              <h2 className="priceofProd">
                {item.map((item) => item && item.currency.symbol)}{" "}
                {item.map((item) => item && item.amount)}
              </h2>
              <button
                onClick={() => this.state.getCardProd(this.state.data)}
                className="addToCard"
              >
                add to card
              </button>
              <p className="description">{this.state.data.description}</p>
            </div>
          </Col4>
        </Rowproduct>
      </div>
    );
  }
}

export default ProductInfo;
