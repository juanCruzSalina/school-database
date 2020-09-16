import React, { Component } from "react";
import axios from "axios";
import { Teacher } from "./Teacher";
import "./byeMarker.css";

export default class TeachersList extends Component {
  state = {
    teachers: []
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/teachers");
    this.setState({ teachers: res.data });
  }

  render() {
    return (
      <div className="box">
        <div className="container mt-5 flex-grow-1">
          <h2 className="mt-5"> Teachers List: </h2>
          <Teacher list={this.state.teachers} />
        </div>
      </div>
    );
  }
}
