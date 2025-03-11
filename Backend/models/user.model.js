const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [1, 'First name must be at least 3 characters long'],
    },
    lastname: {
      type: String,
      minLength: [1, 'Last name must be at least 3 characters long'],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Email must be at least 5 characters long'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

// 🔹 Generate JWT Token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
};

// 🔹 Compare Password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// 🔹 Hash Password
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
