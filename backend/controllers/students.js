const express = require("express");
const students = express.Router();
const Student = require("../models/students.js");

//POST ROUTE
students.post("/", async (req, res) => {
  Student.create(req.body, (error, createdStudent) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createdStudent);
  });
});

//INDEX ROUTE
students.get("/", (req, res) => {
  Student.find({}, (err, foundStudents) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundStudents);
  });
});

module.exports = students;
