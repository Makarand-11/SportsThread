const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cartData: {
    type: Object,
    default: {}
  },
}, {minimize: false});

const userModel = mongoose.models.user || mongoose.model('User', userSchema);

module.exports = userModel;
