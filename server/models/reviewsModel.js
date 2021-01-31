const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewsSch = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
})

module.exports = mongoose.model('Review', reviewsSch, 'reviews')
