const express = require('express');
const users = express.Router();
const User = require('../models/users.js');

//POST ROUTE
users.post('/register', async (req, res) => {
    User.create(req.body, (error, createdUser) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdUser) 
    })
  })

//INDEX ROUTE
users.get('/', (req, res) => {
    User.find({}, (err, foundUsers) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundUsers)
    })
})

//DELETE  ROUTE
users.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(deletedUser);
    })
  })
  
  //EDIT ROUTE
  users.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedUser);
    })
  })

module.exports = users;