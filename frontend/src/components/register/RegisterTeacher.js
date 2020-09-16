import React, { Component } from "react";
import axios from "axios";

export default class RegisterTeacher extends Component {
  state = {
    name: "",
    lastName: "",
    dni: "",
    registration: "",
    antiquity: "",
    year: "",
    divition: "",
    subject: "",
    substitute: false,
    shift: ""
  };

  onChangeTeacher = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/teachers", {
      name: this.state.name,
      lastName: this.state.lastName,
      dni: this.state.dni,
      registration: this.state.registration,
      antiquity: this.state.antiquity,
      year: this.state.year,
      divition: this.state.divition,
      subject: this.state.subject,
      shift: this.state.shift
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="box">
        <div className="container mt-5">
          <div className="col-md-6 offset-md-3">
            <div className="card card-body bg-light text-center">
              <h3> Register a teacher </h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group mt-3 ">
                  <input
                    type="text"
                    className="form-control mb-2 "
                    placeholder="Name"
                    name="name"
                    onChange={this.onChangeTeacher}
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={this.onChangeTeacher}
                  />
                  <input
                    type="text"
                    className="form-control mb-2 "
                    placeholder="DNI"
                    name="dni"
                    onChange={this.onChangeTeacher}
                  />
                  <input
                    type="text"
                    className="form-control mb-2 "
                    placeholder="Registration"
                    name="registration"
                    onChange={this.onChangeTeacher}
                  />
                  <input
                    type="text"
                    className="form-control mb-2 "
                    placeholder="Antiquity"
                    name="antiquity"
                    onChange={this.onChangeTeacher}
                  />
                  <div className="row mb-2">
                    <div className="col-md-6 ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Year"
                        name="year"
                        onChange={this.onChangeTeacher}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Divition"
                        name="divition"
                        onChange={this.onChangeTeacher}
                      />
                    </div>
                  </div>
                  <div className="input-group mb-2">
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
                      onChange={this.onChangeTeacher}
                      name="shift"
                    >
                      <option defaultValue>Choose...</option>
                      <option value="Morning">Morning</option>
                      <option value="Late">Late</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    className="form-control mb-2 "
                    placeholder="Subject"
                    name="subject"
                    onChange={this.onChangeTeacher}
                  />
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
