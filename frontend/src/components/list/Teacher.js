import React from "react";
import "./byeMarker.css";

export const Teacher = ({ list }) => {
  return (
    <table className="table bg-light table-bordered">
      <thead>
        <tr>
          <th scope="col">DNI</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Registration</th>
          <th scope="col">Antiquity</th>
          <th scope="col">Substitute</th>
          <th scope="col">Subject</th>
          <th scope="col">Year</th>
          <th scope="col">Divition</th>
          <th scope="col">Shift</th>
        </tr>
      </thead>
      <tbody>
        {list.map((Teacher) => (
          <tr key={Teacher._id}>
            <td>{Teacher.dni}</td>
            <td>{Teacher.name}</td>
            <td>{Teacher.lastName}</td>
            <td>{Teacher.registration}</td>
            <td>{Teacher.antiquity}</td>
            <td>{Teacher.year}</td>
            <td>{Teacher.divition}</td>
            <td>{Teacher.subject}</td>
            <td>{Teacher.substitute}</td>
            <td>{Teacher.shift}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
