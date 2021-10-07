const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  useremail: {
    type: String,
    required: true,
    unique: true
  },
  userpassword: {
    type: String,
    required: true
  },
  results: [{
    keywords: String,
    positive: Number,
    negative: Number,
    neutral: Number
  }]
});

module.exports = User = mongoose.model('users', UserSchema);