import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import RegisterStudent from "./components/register/RegisterStudent";
import RegisterTeacher from "./components/register/RegisterTeacher";
import StudentList from "./components/list/StudentsList";
import TeacherList from "./components/list/TeachersList";
import MainMenu from "./components/MainMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" component={MainMenu} exact />
      <Route path="/students" component={StudentList} exact />
      <Route path="/students/:id" component={RegisterStudent} exact />
      <Route path="/teachers" component={TeacherList} exact />
      <Route path="/teachers/:id" component={RegisterTeacher} exact />
      <Footer />
    </Router>
  );
}

export default App;
