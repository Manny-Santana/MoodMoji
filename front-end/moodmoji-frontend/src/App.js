import React from "react";
import Table from "./components/Table";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateForm from "./components/CreateForm";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import LoginContainer from "./components/LoginContainer";

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
      loggedin: false,
      students: [],
      student: {},
      edit: false,
      updatedStudent: {}
    };
    this.getStudents = this.getStudents.bind(this);
    // this.getStudent = this.getStudent.bind(this);
    this.removeStudent = this.removeStudent.bind(this);
    this.setState = this.setState.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
    this.toggleEditOn = this.toggleEditOn.bind(this);
    this.toggleEditOff = this.toggleEditOff.bind(this);
    this.passData = this.passData.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  //Function tied CreateForm to add a new Mood
  handleAddMood(student) {
    this.setState({
      students: [...this.state.students]
    });
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    const response = await axios(`${baseURL}/students`);
    // this.setState({
    //   students: response
    // });
    this.setState({
      students: [...response.data]
    });
  }

  async removeStudent(id) {
    await axios.delete(`${baseURL}/students/${id}`);
    const filteredFoundStudents = this.state.students.filter(student => {
      return student._id !== id;
    });

    this.setState({
      students: filteredFoundStudents
    });
  }

  async updateStudent(id, body) {
    await axios.put(`${baseURL}/students/${id}`, body);
    this.toggleEditOff();
    this.getStudents();
  }

  toggleEditOn() {
    this.setState({
      edit: true
    });
  }
  toggleEditOff() {
    this.setState({
      edit: false
    });
  }

  passData(obj) {
    this.toggleEditOn();
    this.setState({
      updatedStudent: obj
    });
  }
  toggleLogin() {
    this.setState((prevState, props) => {
      return { loggedin: !prevState.loggedin };
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedin
          ? <div>
              <h1>How is your child feeling today?</h1>
              <button onClick={this.toggleLogin}>Logout</button>
              <CreateForm getStudents={this.getStudents} />

              <Table
                studentData={this.state.students}
                removeStudent={this.removeStudent}
                updateStudent={this.updateStudent}
                toggleEditOn={this.toggleEditOn}
                toggleEditOff={this.toggleEditOff}
                updatedStudent={this.state.updatedStudent}
                passData={this.passData}
                edit={this.state.edit}
              />
            </div>
          : <LoginContainer toggleLogin={this.toggleLogin} />}
      </div>
    );
  }
}

export default App;
