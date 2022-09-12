import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Row from "../../layout/Row/Row";

class Clothes extends Component {
  constructor(props) {
    super(props);
    const { clothes, getId, currentCurrency } = props;
    this.state = {
      clothes: clothes,
      getId: getId,
      currentCurrency: currentCurrency,
    };
  }

  render() {
    return (
      <div>
        Clothes
        <Row>
          {this.state.clothes.data.map((item, index) => (
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

export default Clothes;
