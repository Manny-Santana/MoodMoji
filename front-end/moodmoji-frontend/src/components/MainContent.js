import React, { Component } from "react";

import Student from "./Students";
import Feelings from "./Feelings";

class MainContent extends Component {
  render() {
    return (
      <div className="main">
        <h1>Main Content</h1>
        <Feelings />
        <Student />
      </div>
    );
  }
}

export default MainContent;
