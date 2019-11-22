import React, { Component } from "react";
import CreateForm from "./CreateForm";

class MainContent extends Component {
  render() {
    return (
      <div className="main">
        <timestamp></timestamp>
        <img src={this.props.emoji}></img>
      </div>
    );
  }
}

export default MainContent;
