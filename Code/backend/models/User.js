const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Add name field
  email: { type: String, required: true, unique: true }, // Rename username to email
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
