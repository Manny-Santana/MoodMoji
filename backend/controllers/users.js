const express = require('express');
const users = express.Router();
const User = require('../models/users.js');

//POST ROUTE
users.post('/', async (req, res) => {
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


module.exports = users;