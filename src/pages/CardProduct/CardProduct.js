import React, { Component } from "react";

class CardProduct extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const { howMany, cardProduct, attribute } = props;
    this.state = {
      cardProduct: cardProduct,
      attribute: attribute,
      howMany: howMany,
      allProds: [],
    };
  }
  render() {
    return (
      <div>
        <div className="cardProduct">
          <div className="leftSideInfo">
            <h1>Nothing here</h1>
          </div>
          <div className="rightSideInfo">Info Bar</div>
        </div>
      </div>
    );
  }
}

export default CardProduct;
