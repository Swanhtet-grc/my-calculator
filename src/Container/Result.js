import React, { Component } from "react";
import "./Result.css"

class Result extends Component {
  change = () => {
    console.log("Hi");
  };
  render() {
    return <div className="Result">{this.props.value}</div>;
  }
}

export default Result;
