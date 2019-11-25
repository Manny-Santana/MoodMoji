import React, { Component } from "react";
import axios from "axios";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL =
    "mongodb+srv://MoodMoji:Dino3000@moodmoji-wnira.mongodb.net/test?retryWrites=true&w=majority";
}

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  // }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  setSmileMood = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      emoji: ":smile:"
    });
  };

  setGrinningMood = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      emoji: ":grinning:"
    });
  };

  setExpressionlessMood = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      emoji: ":expressionless:"
    });
  };

  setConfusedMood = event => {
    event.preventDefault();
    console.log(event);
    const { name, value } = event.target;

    this.setState({
      emoji: ":confused:"
    });
  };

  setWorriedMood = event => {
    event.preventDefault();
    console.log(event);
    const { name, value } = event.target;

    this.setState({
      emoji: ":worried:"
    });
  };

  async handleSubmit(event) {
    event.preventDefault();

    const response = await axios.post(`${baseURL}/students`, {
      childname: this.state.childname,
      text: this.state.text,
      emoji: this.state.emoji,
      parentName: this.state.parentName,
      teacherId: this.state.teacherId
    });
    // console.log(response.data.emoji);
    this.setState({ childname: "" });
    this.props.getStudents(response.data);
  }

  // componentDidMount() {
  //   this.getStudents();
  // }

  // handleSubmit = student => {
  //   this.setState({ students: [...this.state.students, student] });
  // };

  render() {
    const { childname, parentName, text, mood } = this.state;
    return (
      <div>
        {/* <h1>
          Hello, {this.state.parentName}! How is {this.state.studentName} doing
          today?
        </h1> */}
        <form>
          <label>Student Name</label>
          <input
            type="text"
            name="childname"
            value={childname}
            onChange={this.handleChange}
          />
          <label>Parent Name</label>
          <input
            type="text"
            name="parentName"
            value={parentName}
            onChange={this.handleChange}
          />

          <button
            onClick={this.setSmileMood}
            name="mood"
            value=":smile:"
            className="emoji"
          >
            <img
              // value=":smile:"
              src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f604@2x.png"
            ></img>
          </button>
          <button
            onClick={this.setGrinningMood}
            // onClick()=>{this.setMood}
            name="mood"
            value=":grinning:"
            className="emoji"
          >
            <img
              // value=":smile:"
              src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f60a@2x.png"
            ></img>
          </button>
          <button
            onClick={this.setExpressionlessMood}
            name="mood"
            value=":expressionless:"
            className="emoji"
          >
            <img
              // value=":smile:"
              src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f610@2x.png"
            ></img>
          </button>
          <button
            onClick={this.setConfusedMood}
            name="mood"
            value=":confused:"
            className="emoji"
          >
            <img
              // value=":smile:"
              src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f61f@2x.png"
            ></img>
          </button>
          <button
            onClick={this.setWorriedMood}
            name="mood"
            nvalue=":worried:"
            className="emoji"
          >
            <img
              // value=":smile:"
              src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f629@2x.png"
            ></img>
          </button>
          <label>Care to explain why?</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
          />
          <input
            type="button"
            value="submit"
            onClick={event => {
              this.handleSubmit(event);
              this.setState(this.initialState);
            }}
          />
        </form>
      </div>
    );
  }
}

export default CreateForm;
