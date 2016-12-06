var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserBookSchema = new mongoose.Schema({
  userid: {
            type: Schema.ObjectId,
            ref: 'User'
        }  ,
  bookid: {
            type: Schema.ObjectId,
            ref: 'Book'
        },

  created_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('userbook', UserBookSchema);
