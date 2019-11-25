const express = require('express');
const bcrypt = require('bcrypt');
const users = express.Router();

const User = require('../models/users.js');

//POST ROUTE  
users.post('/register', async (req, res) => {   
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    );
    User.create(req.body, (err, createdUser) => {
        if (err) {
            // res.status(400).json({ err: err.message })
            res.status(200).json("email address has already been used by another account");
        }else   {
            res.status(200).send(createdUser);
        }     
    });

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

//POST ROUTE for LOGIN
users.post('/login', (req, res) => {
    console.log('req.body');
    User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (error) {
            res.status(400).json({ error: error.message })
          }
        if(foundUser && foundUser._id){
            //Check password match only for bcrypted passwords
            // if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            //Check password match for both bcrypt and non brcypted passwords
            if(req.body.password === foundUser.password) {
            console.log(req.body.email);
            res.status(200).send(foundUsers);
        }else {
            res.status(200).json("wrong password");
        }
      }else {
        res.status(200).json("invalid username");
      }
      
    });

  });

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