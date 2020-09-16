import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MainMenu extends Component {
  render() {
    return (
      <div className="container-fluid text-center mt-lg-5">
        <div className="container">
          <h1> Welcome to the School database </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas
            blandit metus et pulvinar. Aenean ac molestie erat. Aliquam molestie
            purus eu lacus vestibulum aliquam. Sed eu risus nulla. Aenean.{" "}
          </p>
          <img
            src={require("../public/img/school.jpg")}
            alt="Schools"
            className="shadow-lg mb-5 rounded mt-5"
          />
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 mb-5 mt-5">
              <div className="col-md-8 mx-auto">
                <div className="card text-white bg-info">
                  <img
                    src={require("../public/img/index.jpg")}
                    className="card-img-top pb-1"
                    alt="board"
                  />
                  <div className="card-header">Teacher's Database</div>
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    egestas blandit metus et pulvinar. Aenean ac molestie erat.
                    Aliquam molestie purus eu lacus vestibulum aliquam. Sed eu
                    risus nulla. Aenean.
                  </div>
                  <Link
                    type="button"
                    className="btn btn-primary btn-lg"
                    to="/teachers"
                  >
                    See more...
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="col-md-8 mx-auto">
                <div className="card text-white bg-info">
                  <img
                    src={require("../public/img/cuaderno.jpg")}
                    className="card-img-top align-content-center"
                    alt="notebook"
                  />
                  <div className="card-header">Student's Database</div>
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    egestas blandit metus et pulvinar. Aenean ac molestie erat.
                    Aliquam molestie purus eu lacus vestibulum aliquam. Sed eu
                    risus nulla. Aenean.
                  </div>
                  <Link
                    type="button"
                    className="btn btn-secondary btn-lg"
                    to="/students"
                  >
                    See more...
                  </Link>
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
