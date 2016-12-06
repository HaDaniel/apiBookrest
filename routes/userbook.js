var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
var Book = require('../models/Book.js');

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file
var app = express();
var ObjectID = require('mongodb').ObjectID;



/* GET /users listing. */
router.get('/', function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  var decoded = jwt.decode(token, {complete: true});
  var userId = decoded.payload.data



});



/* PUT /users/:id */
router.put('/read', function(req, res, next) {
  //Token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  var decoded = jwt.decode(token, {complete: true});

  var userId = decoded.payload.data
  var bookId = req.body.bookid;


  User.findById(userId, function (err, user){

      Book.findById(bookId, function (err, book){

          console.log(book);
        user.read.push(book);

        console.log(user.books);
        user.save();
      });

     if (err) return next(err);
     res.json(user);


   });

});

/* PUT /users/:id */
router.put('/unread', function(req, res, next) {
  //Token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  var decoded = jwt.decode(token, {complete: true});

  var userId = decoded.payload.data
  var bookId = req.body.bookid;


  User.findById(userId, function (err, user){

      Book.findById(bookId, function (err, book){

          console.log(book);
        user.unread.push(book);

        console.log(user.books);
        user.save();
      });

     if (err) return next(err);
     res.json(user);


   });
});

module.exports = router;
