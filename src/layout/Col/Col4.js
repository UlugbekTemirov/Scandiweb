import React, { Component } from "react";
import "./Col.css";

class Col4 extends Component {
  render() {
    return <div className="col4">{this.props.children}</div>;
  }
}

export default Col4;
