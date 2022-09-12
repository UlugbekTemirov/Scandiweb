import React, { Component } from "react";
import "./Row.css";

class Rowproduct extends Component {
  render() {
    return <div className="rowProduct">{this.props.children}</div>;
  }
}

export default Rowproduct;
