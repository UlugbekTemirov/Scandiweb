import React, { Component } from "react";
import "./Col.css";

class Col6 extends Component {
  render() {
    return <div className="col6">{this.props.children}</div>;
  }
}

export default Col6;
