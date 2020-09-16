const { Router } = require("express");
const router = Router();

// Controllers import
const {
  getStudents,
  registerStudent,
  getStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/student-controllers");

// Students list and registration
router.route("/").get(getStudents).post(registerStudent);
// Student show, update, delete
router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
