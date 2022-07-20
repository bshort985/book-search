const mongoose = require('mongoose');
const dotenv = ("dotenv");
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/bookDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }
);

module.exports = mongoose.connection;
