

var express = require('express');
var router = express.Router();

var user = require('../models/User.js');

/* GET /users listing. */
router.get('/', function(req, res, next) {
  user.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* POST /users */
router.post('/', function(req, res, next) {
  user.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /users/id */
router.get('/:id', function(req, res, next) {
  user.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /users/id */
router.get('/name/:id', function(req, res, next) {
  user.findOne(req.params.name, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /users/:id */
router.put('/:id', function(req, res, next) {
  user.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /users/:id */
router.delete('/:id', function(req, res, next) {
  user.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
