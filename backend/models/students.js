const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
  {
<<<<<<< HEAD
    studentName: { type: String, required: true },
=======
    studentName: { type: String },
>>>>>>> 6b6338a889022f0dffe0984783f6bfe63db8fec4
    text: String,
    emoji: String,
    parentName: String,
    teacherId: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
