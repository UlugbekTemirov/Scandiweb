import React, { Component } from "react";
import "./Notify.css";

class Notify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notify: false,
    };
  }

  render() {
    return (
      <div className={this.state.notify ? "sideNotify" : "hidden"}>
        Currency has changed successfully! Update page
      </div>
    );
  }
}

export default Notify;
