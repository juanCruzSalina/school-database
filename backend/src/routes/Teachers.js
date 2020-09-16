const { Router } = require("express");
const router = Router();

// Controllers import
const {
  getTeachers,
  postTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher
} = require("../controllers/teachers-controllers");

// Teachers list and registration
router.route("/").get(getTeachers).post(postTeacher);

// Teacher show, update, delete
router.route("/:id").get(getTeacher).put(updateTeacher).delete(deleteTeacher);

module.exports = router;
