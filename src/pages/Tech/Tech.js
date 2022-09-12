import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Row from "../../layout/Row/Row";

class Tech extends Component {
  constructor(props) {
    super(props);
    const { tech, getId, currentCurrency } = props;
    this.state = {
      tech: tech,
      getId: getId,
      currentCurrency: currentCurrency,
    };
  }

  render() {
    return (
      <div>
        Technological Products
        <Row>
          {this.state.tech.data.map((item, index) => (
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

export default Tech;
