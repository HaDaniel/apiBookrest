var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var book = require('../models/Book.js').schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: { type: Boolean, default: false },
    unread: [book],
    read: [book]
}));
