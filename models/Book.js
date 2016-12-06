var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
  titre: String,
  description: String,
  auteur: String,
  codeBarre: String,
  isRead: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Book', BookSchema);
