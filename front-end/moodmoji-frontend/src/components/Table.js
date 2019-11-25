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
  const rows = props.studentData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.studentName}</td>
        <td>{row.parentName}</td>
        <td>
          <Emoji text={`${row.mood}`} />
        </td>
        <td>{row.text}</td>
        <td>
          <button onClick={() => props.updateStudent(index)}>Edit</button>
        </td>
        <td>
          <button onClick={() => props.removeStudent(index)}>Delete</button>
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
