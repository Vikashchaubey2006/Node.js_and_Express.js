const mongoose = require('mongoose');

function connectToMongoDB(MONGO_URI) {
  return mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = { connectToMongoDB };
