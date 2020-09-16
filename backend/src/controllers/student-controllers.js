const studentCtrl = {};

// Model import
const Student = require("../models/student-model");

// Students list
studentCtrl.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// Student registration
studentCtrl.registerStudent = async (req, res) => {
  const { name, lastName, dni, year, divition, shift } = req.body;
  const newStudent = new Student({
    name,
    lastName,
    dni,
    year,
    divition,
    shift
  });
  await newStudent.save();
  res.json("New student added");
};

// Student show
studentCtrl.getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};

// Student update
studentCtrl.updateStudent = async (req, res) => {
  const { year, divition, shift } = req.body;
  await Student.findByIdAndUpdate(req.params.id, {
    year,
    divition,
    shift
  });
  res.json("Student info Updated");
};

// Student information delete
studentCtrl.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json("Student info deleted");
};

module.exports = studentCtrl;
