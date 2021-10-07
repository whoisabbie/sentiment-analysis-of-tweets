const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../modles/User');
const verifyToken = require('../middleware/auth');

router.use(express.json());

router.post('/login', (req, res) => {
  const { useremail, userpassword } = req.body;
  User.findOne({ useremail }, (err, userFound) => {
    if (err) return console.error(err);
    if (!userFound) {
      res.status(400).json('No User Found');
    } else {
      if (userpassword !== userFound.userpassword) {
        res.status(404).json('Invalid Credentials...');
      } else {
        jwt.sign({ id: userFound['_id'] }, 'secretkey', { expiresIn: 3600 }, (err, token) => {
          if (err) return console.error(err);
          res.json({
            token,
            user: {
              id: userFound._id,
              username: userFound.username,
              useremail: userFound.useremail
            }
          });
        });
      }
    }
  });
});

router.post('/register', (req, res) => {
  const { username, useremail, userpassword } = req.body;
  User.findOne({ useremail }, (err, userFound) => {
    if (userFound) {
      res.status(409).json('Email already exist.');
    } else {
      const newUser = new User({
        username,
        useremail,
        userpassword
      });
      newUser.save((err, data) => {
        if (err) return console.error(err);
        res.json('Registered Successfully...');
      });
    }
  })
});

router.get('/check', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ authData });
    }
  });
});

module.exports = router;