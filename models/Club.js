const mongoose = require('mongoose')

const ClubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ratingScore: {
    type: Number,
    default: 0,
  },
  ratingVotes: {
    type: Number,
    default: 0,
  },
  raters: {
    type: [String],
    default: []
  },
  userId: {
    type: String,
    required: true
  },
  members: {
    type: [String],
    default: []
  },
  isbn: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Club', ClubSchema)