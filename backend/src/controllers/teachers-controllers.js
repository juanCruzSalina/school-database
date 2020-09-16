const teacherCtrl = {};

// model export
const Teacher = require("../models/teacher-model");

// Teachers list
teacherCtrl.getTeachers = async (req, res) => {
  const teacher = await Teacher.find();
  res.json(teacher);
};

// Teacher registration
teacherCtrl.postTeacher = async (req, res) => {
  const {
    name,
    lastName,
    dni,
    registration,
    antiquity,
    year,
    divition,
    subject,
    substitute,
    shift
  } = req.body;
  const newTeacher = new Teacher({
    name,
    lastName,
    dni,
    registration,
    antiquity,
    year,
    divition,
    subject,
    substitute,
    shift
  });
  await newTeacher.save();
  res.json("New teacher saved");
};

// Single Teacher show
teacherCtrl.getTeacher = async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  res.json(teacher);
};

// Teacher info update
teacherCtrl.updateTeacher = async (req, res) => {
  const { antiquity, year, divition, subject, substitute, shift } = req.body;
  await Teacher.findByIdAndUpdate(req.params.id, {
    antiquity,
    year,
    divition,
    subject,
    substitute,
    shift
  });
  res.json("Teacher info Updated");
};

// Teacher info deleted
teacherCtrl.deleteTeacher = async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json("Teacher info deleted");
};

module.exports = teacherCtrl;
