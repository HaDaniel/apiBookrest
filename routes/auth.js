var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('../config'); // get our config file
var app = express();

// route to authenticate a user (POST http://localhost:4000/api/authenticate)
router.post('/authenticate', function(req, res) {

  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
        console.log(config.secret);
        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, config.secret, {
          //expiresInMinutes: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }

    }

  });
});

module.exports = router;
