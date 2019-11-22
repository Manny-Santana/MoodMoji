
const express = require('express');
const students = express.Router();
const Student = require('../models/students.js');

//POST ROUTE
students.post('/', async (req, res) => {
    Student.create(req.body, (error, createdStudent) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdStudent) 
    })
  })

//INDEX ROUTE
students.get('/', (req, res) => {
    Student.find({}, (err, foundStudents) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundStudents)
    })
})

//DELETE ROUTE
students.delete('/:id', (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, deletedStudent) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedStudent);
  })
})

//EDIT ROUTE
students.put('/:id', (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedStudent) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(updatedStudent);
  })
})

module.exports = students;