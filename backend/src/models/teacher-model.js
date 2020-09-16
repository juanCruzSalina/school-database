const { Schema, model } = require("mongoose");

// Teacher schema
const teacherSchema = new Schema({
  name: {
    type: String,
    required: "{PATH} is required!"
  },
  lastName: {
    type: String,
    required: "{PATH} is required!"
  },
  dni: {
    type: Number,
    required: "{PATH} is required!",
    unique: true
  },
  registration: {
    type: Number,
    min: 1,
    max: [1000000, "Registration number must have 6 digits"],
    unique: true
  },
  antiquity: {
    type: Number,
    required: "{PATH} is required!"
  },
  year: {
    type: Number,
    min: 1,
    max: [7, "There are not higher grade than 7th"]
  },
  divition: {
    type: Number
  },
  subject: {
    type: String,
    required: "{PATH} is required!"
  },
  substitute: {
    type: Boolean
  },
  shift: {
    type: String,
    enum: ["Morning", "Late"]
  }
});

module.exports = model("Teacher", teacherSchema);
