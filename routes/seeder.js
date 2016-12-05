var express = require('express');
var router = express.Router();

var User = require('../models/User.js');
var Book = require('../models/Book.js');

router.get('/', function(req, res) {

  // create a sample user
  var admin = new User({
    name: 'admin',
    password: '0000',
    admin: true
  });

  // save the sample user
  admin.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    //res.json({ success: true });
  });
  var livre1  = new Book({
    titre: 'livre1',
    description: 'description1',
    auteur: 'auteur1'
  });

  // save the sample user
  livre1.save(function(err) {
    if (err) throw err;

    console.log('Livre saved successfully');
    // 
  });

  res.json({ success: true });
});


module.exports = router;
