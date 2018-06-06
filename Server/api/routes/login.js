const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

// router.get(['/', '/login'], (req, res, next) => {
//   res.status(200).json({ msg: 'Handling GET login request' });
// });

router.post('/signup', (req, res, next) => {
  var body = { username: req.body.username, password: req.body.password };
  var user = new User(body);
  user
    .save()
    .then(user => {
      console.log('');
      res.status(200).json({ msg: 'user saved successfully' });
    })
    .catch(e => {
      console.log('error', e);
      res.status(400).send(e);
    });
});

router.post('/login', (req, res, next) => {
  User.find({ username: req.body.username })
    .exec()
    .then(user => {
      console.log('Users', user);
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth falied'
        });
      }
      if (user[0].password === req.body.password) {
        const token = jwt.sign(
          { email: user[0].username, userId: user[0]._id },
          'secret',
          {
            expiresIn: '1hr'
          }
        );
        return res.status(200).json({
          message: 'Login Successful',
          user: user[0],
          token: token
        });
      } else {
        return res.status(401).json({
          message: 'Login Failed'
        });
      }
    })
    .catch(function(err) {
      console.log('error in login', err);
      res.status(400).json({
        err: err
      });
    });
});

module.exports = router;
