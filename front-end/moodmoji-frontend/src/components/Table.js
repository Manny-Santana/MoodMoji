ls
import React, { Component } from "react";
import Emoji from "react-emoji-render";
import Edit from "./Edit";
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Parent Name </th>
        <th>Current Mood</th>
        <th>Parent's Comments</th>
        <th />
        <th />
      </tr>
    </thead>
  );
};

const TableBody = props => {
  //   console.log("props...." + props.studentData.childname);

  const rows = props.studentData.map(row => {
    return (
      <tr key={row._id}>
        <td>
          {row.childname}
        </td>
        <td>
          {row.parentName}
        </td>
        <td>
          <Emoji text={`${row.emoji}`} />
        </td>
        <td>
          {row.text}
        </td>
        <td>
          <button onClick={() => props.passData(row)}>Edit</button>
        </td>
        <td>
          <button onClick={() => props.removeStudent(row._id)}>Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <tbody>
      {rows}
    </tbody>
  );
};

class Table extends Component {
  render() {
    const { studentData, removeStudent, passData } = this.props;
    //ternary in the return statement set to render the edit page if the edit state in app.js is set to true.
    return (
      <div>
        {this.props.edit
          ? <Edit
              target={this.props.updatedStudent}
              updatedStudent={this.props.updatedStudent}
              updateStudentFunction={this.props.updateStudent}
            />
          : <table>
              <TableHeader />
              <TableBody
                studentData={studentData}
                removeStudent={removeStudent}
                passData={passData}
              />
            </table>}
      </div>
    );
  }
}

export default Table;
