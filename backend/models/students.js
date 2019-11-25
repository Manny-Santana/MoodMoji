const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
  {
    childname: { type: String, required: true },
    text: String,
    emoji: String,
    parentName: String,
    teacherId: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
