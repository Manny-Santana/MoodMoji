import React, { Component } from "react";
import axios from "axios";
class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      users: []
    };
    this.getStudents = this.getStudents.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getStudents();
    this.getUsers();
    console.log("state is: ", this.state);
  }

  async getStudents() {
    const url = "http://localhost:3003/students";
    const response = await axios.get(url);
    const data = response.data;
    this.setState({
      students: data
    });
  }

  async getUsers() {
    const url = "http://localhost:3003/users";
    const response = await axios.get(url);
    const data = response.data;
    this.setState({
      users: data
    });
  }

  render() {
    const studentList = this.state.students.map(student => {
      console.log(student);
      return (
        <div className="studentItem" key={student._id}>
          <h2>
            {student.studentName}
          </h2>
          <p>
            {student._id}
          </p>

          <img src={student.emoji} alt="" />
        </div>
      );
    });
    const usersList = this.state.students.map(parent => {
      console.log(parent);
      return (
        <div className="userItem">
          <h2>
            {parent.parentName}
          </h2>
          <p>
            {parent._id}
          </p>
        </div>
      );
    });

    return (
      <div className="listContainer">
        <h1>Students</h1>
        <div className="student-item-cont">
          {studentList}
        </div>
        {/* <h1>Users</h1>
        <div className="user-item-cont">
          {usersList}
        </div> */}
      </div>
    );
  }
}

export default Students;
