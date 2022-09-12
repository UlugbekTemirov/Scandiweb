import React, { Component } from "react";
import "./Col.css";

class Col extends Component {
  render() {
    return <div className="col">{this.props.children}</div>;
  }
}

export default Col;
