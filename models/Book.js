var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
  Titre: String,
  Description: String,
  Auteur: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Book', BookSchema);
