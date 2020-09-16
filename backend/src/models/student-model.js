const { Schema, model } = require("mongoose");

// Student Schema
const studentSchema = new Schema({
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
  year: {
    type: Number,
    min: 1,
    max: [7, "There are not higher grade than 7th"]
  },
  divition: {
    type: Number
  },
  shift: {
    type: String,
    enum: ["Morning", "Late"]
  }
});

module.exports = model("Student", studentSchema);
