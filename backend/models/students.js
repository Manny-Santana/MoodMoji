<<<<<<< HEAD
const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
  {
=======
const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
>>>>>>> 2278eaf23574c681bedead7807d96d16abed0f2c
    studentName: { type: String, required: true },
    text: String,
    emoji: String,
    parentName: String,
    teacherId: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
