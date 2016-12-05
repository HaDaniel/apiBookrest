var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
  titre: String,
  description: String,
  auteur: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Book', BookSchema);
