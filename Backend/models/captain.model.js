const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = mongoose.Schema({
  fullname: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, 'First name must be at least 3 characters'],
    },
    lastName: {
      type: String,
      minlength: [3, 'Last name must be at least 3 characters'],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
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
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, 'Color must be at least 3 characters'],
    },
    plateNumber: {
      type: String,
      required: true,
      minlength: [3, 'Plate number must be at least 3 characters'],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, 'Capacity must be at least 1'],
    },
    vehicleType: {
      type: String,
      enum: ['car', 'motorcycle', 'auto'],
      required: true,
    },
  },
  location: {
    lat: {
      type: Number,
    },
    log: {
      type: Number,
    },
  },
});

// 🔹 Generate JWT Token
captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
  return token;
};

// 🔹 Compare Password
captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// 🔹 Hash Password
captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;
