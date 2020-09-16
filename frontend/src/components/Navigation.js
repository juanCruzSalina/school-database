import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className="nav-link" to="/students">
              Students List
            </Link>
            <Link className="nav-link" to="/teachers">
              Teachers List
            </Link>
            <Link className="nav-link" to="/students/:id">
              Register Student
            </Link>
            <Link className="nav-link" to="/teachers/:id">
              Register Teacher
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
