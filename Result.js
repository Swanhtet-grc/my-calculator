import React, { Component } from "react";
import "./Result.css"

class Result extends Component {
  render() {
    return <div className="Result" >{this.props.value}</div>;
  }
}

export default Result;
