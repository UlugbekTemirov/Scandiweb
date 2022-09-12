import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import logoScandiweb from "../../logos/logoScandiWeb.svg";
import shopButton from "../../logos/shopButton.svg";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    const { cardProduct, howMany, attribute } = props;
    console.log(cardProduct);
    this.state = {
      currency: props.currency,
      currentCurrency: props.currentCurrency || "$",
      getCurrentCurrency: props.getCurrentCurrency,
      currencyModal: false,
      cardModal: false,
      cardProduct: cardProduct,
      howMany: howMany,
      attribute: attribute,
    };
  }

  cardModal = () => {
    this.setState({ cardModal: !this.state.cardModal });
  };

  currencyModal = () => {
    this.setState({ currencyModal: !this.state.currencyModal });
  };

  render() {
    console.log(this.state.cardProduct);
    return (
      <Fragment>
        <div
          onClick={() => this.setState({ cardModal: false })}
          className={this.state.cardModal ? "overlay" : "hidden"}
        ></div>
        <div className="navbar">
          <ul className="navbar-ul-left">
            <li className="navbar-li">
              <Link className="navbar-link" to="/allproducts">
                All Products
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="navbar-link" to="/clothes">
                Clothes
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="navbar-link" to="/tech">
                Technology
              </Link>
            </li>
          </ul>
          <img
            className="logoScandiweb"
            src={logoScandiweb}
            alt="logoScandiweb"
          />
          <ul className="navbar-ul-right">
            <li className="navbar-li">
              <button
                onClick={() => (
                  this.currencyModal(), this.setState({ cardModal: false })
                )}
                className="currencySwitcher"
              >
                {this.state.currentCurrency}{" "}
                {!this.state.currencyModal ? "⋏" : "⋎"}
              </button>
              <div
                className={
                  this.state.currencyModal ? "currencyModal" : "hidden"
                }
              >
                {this.state.currency.map((item, index) => (
                  <button
                    className="currencyType"
                    onClick={() => (
                      this.state.getCurrentCurrency(item.label),
                      this.setState({ currentCurrency: item.symbol }),
                      this.currencyModal(),
                      this.setState({ cardModal: false })
                    )}
                    key={index}
                  >
                    {item.symbol} {item.label}
                  </button>
                ))}
              </div>
            </li>
            <li className="navbar-li">
              <button
                onClick={() => (
                  this.cardModal(), this.setState({ currencyModal: false })
                )}
                className="shopButton"
              >
                <img src={shopButton} alt="shopButton" />
              </button>
              <div className={this.state.cardModal ? "cardModal" : "hidden"}>
                <div className="cardElement">here is product</div>
                <Link to="/card">
                  <button
                    onClick={() => this.setState({ cardModal: false })}
                    className="cardButtonAnother"
                  >
                    View in Card
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
