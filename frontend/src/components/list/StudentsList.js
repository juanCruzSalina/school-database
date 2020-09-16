import React, { Component } from "react";
import axios from "axios";
import { Student } from "./Student";
import "./byeMarker.css";
import "./studentlist.css";

export default class StudentsList extends Component {
  state = {
    students: []
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/students");
    this.setState({ students: res.data });
  }

  render() {
    return (
      <div className="lista">
        <div className="container mt-5 fill">
          <h2 className="mt-5"> Students List: </h2>
          <Student list={this.state.students} />
        </div>
      </div>
    );
  }
}
