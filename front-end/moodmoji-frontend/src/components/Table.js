import React, { Component } from "react";
import Emoji from "react-emoji-render";
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Parent Name </th>
        <th>Current Mood</th>
        <th>Parent's Comments</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  //   console.log("props...." + props.studentData.childname);
  const rows = props.studentData.map(row => {
    return (
      <tr key={row._id}>
        <td>{row.childname}</td>
        <td>{row.parentName}</td>
        <td>
          <Emoji text={`${row.emoji}`} />
        </td>
        <td>{row.text}</td>
        <td>
          <button onClick={() => props.updateStudent(row._id)}>Edit</button>
        </td>
        <td>
          <button onClick={() => props.removeStudent(row._id)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { studentData, removeStudent } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody studentData={studentData} removeStudent={removeStudent} />
      </table>
    );
  }
}

export default Table;
