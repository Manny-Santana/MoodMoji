import React, { Component } from "react";

class Btn extends Component {
    constructor(props) {
      super(props);
      this.state = {};

    }

    

render() {
    return (
        <button onClick={this.setMood} value=":smile:" class="emoji">
        <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f604@2x.png"></img>
      </button>
      <button onClick={this.setMood} value=":grinning:" class="emoji">
        <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f60a@2x.png"></img>
      </button>
      <button onClick={this.setMood} value=":expressionless:" class="emoji">
        <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f610@2x.png"></img>
      </button>
      <button onClick={this.setMood} value=":confused:" class="emoji">
        <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f61f@2x.png"></img>
      </button>
      <button onClick={this.setMood} value=":worried:" class="emoji">
        <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f629@2x.png"></img>
      </button>
    )

}

export default Btn;
