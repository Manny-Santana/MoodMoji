import React from "react";
import Table from "./components/Table";
import "./App.css";
import CreateForm from "./components/CreateForm";
import axios from "axios";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "";
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          _id: 1,
          childname: "Ted",
          text: "sleepy",
          emoji: ":worried:",
          parentName: "Susan",
          teacherId: "Elaine"
        },
        {
          _id: 2,
          childname: "Bobby",
          text: "Did not eat breakfast",
          emoji: ":confused:",
          parentName: "John",
          teacherId: "Elaine"
        },
        {
          _id: 3,
          childname: "Albert",
          text: "ready for school",
          emoji: ":expressionless:",
          parentName: "June",
          teacherId: "Elaine"
        },
        {
          _id: 4,
          childname: "John",
          text: "happy",
          emoji: ":grinning:",
          parentName: "Sandy",
          teacherId: "Elaine"
        },
        {
          _id: 5,
          childname: "Joan",
          text: "looking forward to the halloween party",
          emoji: ":smile:",
          parentName: "Henry",
          teacherId: "Elaine"
        }
      ],
      student: {}
    };
    this.getStudents = this.getStudents.bind(this);
    // this.getStudent = this.getStudent.bind(this);
    this.removeStudent = this.removeStudent.bind(this);
    this.setState = this.setState.bind(this);
  }

  //Function tied CreateForm to add a new Mood
  handleAddMood(student) {
    this.setState({
      students: [...this.state.students, student]
    });
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    const response = await axios(`${baseURL}/students`);
    console.log(response.data);
    // this.setState({
    //   students: response
    // });
    this.setState({
      students: [...response.data, this.state.students]
    });
    console.log(this.state.students);
  }

  // setMood = event => {
  //   const { student, id } = event.target;
  //   console.log(id);

  //   this.setState({
  //     [student]: id
  //   });
  // };

  async removeStudent(id) {
    await axios.delete(`${baseURL}/students/${id}`);
    const filteredFoundStudents = this.state.students.filter(student => {
      return student._id !== id;
    });

    this.setState({
      students: filteredFoundStudents
    });
  }

  // removeStudent = index => {
  //   const { students } = this.state;

  //   this.setState({
  //     students: students.filter((student, i) => {
  //       return i !== index;
  //     })
  //   });
  // };

  render() {
    return (
      <div className="App">
        <h1>How is your child feeling today?</h1>
        <CreateForm getStudents={this.getStudents} />
        {/* <ul>
          {this.state.students.map(item => {
            return (
              <li>
                emoji: {item.emoji}
                <button onClick={() => this.deleteMood(item._id)}>
                  DELETE
                </button>
              </li>
            );
          })}
        </ul> */}
        <Table
          studentData={this.state.students}
          removeStudent={this.removeStudent}
        />
      </div>
    );
  }
}

export default App;
