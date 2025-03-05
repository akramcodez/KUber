const mongoose = require('mongoose');

function connectToDB() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log('Connected to DB'))
    .catch((err) => {
      console.error('MongoDB connection failed:', err);
      process.exit(1);
    });
}

module.exports = connectToDB;
