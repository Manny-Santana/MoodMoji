import React, { Component } from "react";
import axios from "axios";

import Emoji from "react-emoji-render";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL =
    "mongodb+srv://MoodMoji:Dino3000@moodmoji-wnira.mongodb.net/test?retryWrites=true&w=majority";
}

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.target
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  // }

  //FIXME: needs to update single values on the object without deleting the whole object.
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
    console.log(this.state);

    // await axios.put(`${baseURL}/students/${}`, {
    //   childname: this.state.newStudent.childname,
    //   text: this.state.newStudent.text,
    //   emoji: this.state.newStudent.emoji,
    //   parentName: this.state.newStudent.parentName,
    //   teacherId: this.state.newStudent.teacherId
    // });
    // // console.log(response.data.emoji);
    // this.setState({ newStudent: {} });
    // this.props.getStudents();
  }

  // componentDidMount() {
  //   this.getStudents();
  // }

  // handleSubmit = student => {
  //   this.setState({ students: [...this.state.students, student] });
  // };

  render() {
    const { childname, parentName, text, emoji } = this.state;
    console.log(emoji);
    return (
      <div className="edit">
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
            placeholder={this.state.childname}
          />
          <label>Parent Name</label>
          <input
            type="text"
            name="parentName"
            value={parentName}
            placeholder={this.state.parentName}
            onChange={this.handleChange}
          />
          <div>
            <p>Current Mood: </p>
            <button className="emoji" value={emoji}>
              <Emoji text={`${emoji}`} />
            </button>
          </div>

          <button
            onClick={this.setSmileMood}
            name="mood"
            value=":smile:"
            className="emoji"
          >
            <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f604@2x.png" />{" "}
          </button>
          <button
            onClick={this.setGrinningMood}
            // onClick()=>{this.setMood}
            name="mood"
            value=":grinning:"
            className="emoji"
          >
            <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f60a@2x.png" />{" "}
          </button>
          <button
            onClick={this.setExpressionlessMood}
            name="mood"
            value=":expressionless:"
            className="emoji"
          >
            <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f610@2x.png" />{" "}
          </button>
          <button
            onClick={this.setConfusedMood}
            name="mood"
            value=":confused:"
            className="emoji"
          >
            <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f61f@2x.png" />{" "}
          </button>
          <button
            onClick={this.setWorriedMood}
            name="mood"
            nvalue=":worried:"
            className="emoji"
          >
            <img src="https://a.slack-edge.com/production-standard-emoji-assets/10.2/apple-medium/1f629@2x.png" />{" "}
          </button>
          <label>Care to explain why?</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
            placeholder={this.state.text}
          />
          <input
            type="button"
            value="submit"
            onClick={() => {
              this.props.updateStudentFunction(
                this.props.target._id,
                this.state
              );
            }}
          />
        </form>
      </div>
    );
  }
}

export default Edit;
