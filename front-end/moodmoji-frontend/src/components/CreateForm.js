import React, { Component } from "react";
import axios from "axios";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL =
    "mongodb+srv://MoodMoji:Dino3000@moodmoji-wnira.mongodb.net/test?retryWrites=true&w=majority";
}

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(`${baseURL}`, {
      emoji: this.state.emoji
    });
    this.setState({ emoji: "" });
    this.props.handleAddMood(response.data);
  }

  render() {
    return (
      <div>
        <h1>
          Hello, {this.state.parentName}! How is {this.state.studentName} doing
          today?
        </h1>
        <button onClick={this.handleSubmit} id="emoji1" class="emoji">
          <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f604@2x.png"></img>
        </button>
        <button onClick={this.handleSubmit} id="emoji2" class="emoji">
          <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f60a@2x.png"></img>
        </button>
        <button onClick={this.handleSubmit} id="emoji3" class="emoji">
          <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f610@2x.png"></img>
        </button>
        <button onClick={this.handleSubmit} id="emoji4" class="emoji">
          <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f61f@2x.png"></img>
        </button>
        <button onClick={this.handleSubmit} id="emoji5" class="emoji">
          <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f629@2x.png"></img>
        </button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Care to explain why?"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateForm;
