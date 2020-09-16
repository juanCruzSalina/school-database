import React from "react";
import "./byeMarker.css";

export const Student = ({ list }) => {
  const deleteUser = (id) => {
    console.log(id);
  };

  return (
    <table className="table bg-light table-bordered">
      <thead>
        <tr>
          <th scope="col">DNI</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Year</th>
          <th scope="col">Divition</th>
          <th scope="col">Shift</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((Student) => (
          <tr key={Student._id}>
            <td>{Student.dni}</td>
            <td>{Student.name}</td>
            <td>{Student.lastName}</td>
            <td>{Student.year}</td>
            <td>{Student.divition}</td>
            <td>{Student.shift}</td>
            <td>
              <li>
                <button className="btn btn-primary ml-5 mr-5">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </li>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
