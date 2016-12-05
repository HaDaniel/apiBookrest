var express = require('express');
var router = express.Router();

var book = require('../models/Book.js');

/* GET /books listing. */
router.get('/', function(req, res, next) {
  book.find(function (err, books) {
    if (err) return next(err);
    res.json(books);
  });
});

/* POST /books */
router.post('/', function(req, res, next) {
  book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /books/id */
router.get('/:id', function(req, res, next) {
  book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /books/:id */
router.put('/:id', function(req, res, next) {
  book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /books/:id */
router.delete('/:id', function(req, res, next) {
  book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
