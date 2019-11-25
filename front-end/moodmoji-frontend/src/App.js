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
          id: 1,
          studentName: "Ted",
          text: "sleepy",
          mood: ":worried:",
          parentName: "Susan",
          teacherId: "Elaine"
        },
        {
          id: 2,
          studentName: "Bobby",
          text: "Did not eat breakfast",
          mood: ":confused:",
          parentName: "John",
          teacherId: "Elaine"
        },
        {
          id: 3,
          studentName: "Albert",
          text: "ready for school",
          mood: ":expressionless:",
          parentName: "June",
          teacherId: "Elaine"
        },
        {
          id: 4,
          studentName: "John",
          text: "happy",
          mood: ":grinning:",
          parentName: "Sandy",
          teacherId: "Elaine"
        },
        {
          id: 5,
          studentName: "Joan",
          text: "looking forward to the halloween party",
          mood: ":smile:",
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
    const response = await axios(`${baseURL}`);
    this.setState([...this.state.students, response.data]);
  }

  setMood = event => {
    const { student, id } = event.target;
    console.log(id);

    this.setState({
      [student]: id
    });
  };

  // async removeStudent(id) {
  //   await axios.delete(`${baseURL}/students/${id}`);
  //   const filteredFoundStudents = this.state.foundStudents.filter(student => {
  //     return student._id !== id;
  //   });

  //   this.setState({
  //     students: filteredFoundStudents
  //   });
  // }

  removeStudent = index => {
    const { students } = this.state;

    this.setState({
      students: students.filter((student, i) => {
        return i !== index;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h1>How is your child feeling today?</h1>
        <CreateForm addStudent={this.addStudent} />
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
          setMood={this.state.setMood}
        />
      </div>
    );
  }
}

export default App;
