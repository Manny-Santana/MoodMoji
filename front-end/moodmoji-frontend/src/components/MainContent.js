import React, { Component } from "react";
<<<<<<< HEAD
import CreateForm from "./CreateForm";
=======
import Student from "./Students";
import Feelings from "./Feelings";
>>>>>>> 6b6338a889022f0dffe0984783f6bfe63db8fec4

class MainContent extends Component {
  render() {
    return (
      <div className="main">
<<<<<<< HEAD
        <timestamp></timestamp>
        <img src={this.props.emoji}></img>
=======
        <h1>Main Content</h1>
        <Feelings />
        <Student />
>>>>>>> 6b6338a889022f0dffe0984783f6bfe63db8fec4
      </div>
    );
  }
}

export default MainContent;
