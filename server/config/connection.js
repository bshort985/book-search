const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://27017/book-search', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
