import React, { Component } from "react";
import axios from "axios";

export default class RegisterStudent extends Component {
  state = {
    name: "",
    lastName: "",
    dni: "",
    year: "",
    divition: "",
    shift: ""
  };

  onChangeStudent = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/students", {
      name: this.state.name,
      lastName: this.state.lastName,
      dni: this.state.dni,
      year: this.state.year,
      divition: this.state.divition,
      shift: this.state.shift
    });
    console.log("Data sent");
  };

  render() {
    return (
      <div className="box">
        <div className="container mt-5">
          <div className="col-md-6 offset-md-3">
            <div className="card card-body bg-light text-center">
              <h3> Register an student </h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group mt-3 ">
                  <input
                    type="text"
                    className="form-control mb-2 "
                    placeholder="Name"
                    name="name"
                    onChange={this.onChangeStudent}
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={this.onChangeStudent}
                  />
                  <input
                    type="text"
                    className="form-control mb-2 "
                    placeholder="DNI"
                    name="dni"
                    onChange={this.onChangeStudent}
                  />
                  <div className="row mb-2">
                    <div className="col-md-6 ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Year"
                        name="year"
                        onChange={this.onChangeStudent}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Divition"
                        name="divition"
                        onChange={this.onChangeStudent}
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label
                        className="input-group-text"
                        htmlFor="this.state.shift"
                      >
                        Shift
                      </label>
                    </div>
                    <select
                      value={this.state.value}
                      className="custom-select"
                      onChange={this.onChangeStudent}
                      name="shift"
                    >
                      <option defaultValue>Choose...</option>
                      <option value="Morning">Morning</option>
                      <option value="Late">Late</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-secondary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
