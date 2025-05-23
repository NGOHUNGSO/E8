const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  ultimate: { type: String, required: true }
});

module.exports = mongoose.model('Character', characterSchema);
