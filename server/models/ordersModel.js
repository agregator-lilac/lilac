const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catalogsSch = new Schema({
  material: { type: String, required: true },
  size: {
    width: { type: Number, required: true },
    depth: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  polishing: { type: Boolean, required: true },
  polishingType: { type: Number },
  flowerGarden: { type: Boolean, required: true },
  flowerGardenFilling: { type: String },
  place: { type: String, required: true },
  name: { type: String, required: true },
  section: { type: String, required: true },
  status: { type: String, required: true },
  creator: { type: Schema.ObjectId, ref: 'User' },
  performer: { type: Schema.ObjectId, ref: 'BuisnessUser' },
})

module.exports = mongoose.model('Orders', catalogsSch, 'orders')
