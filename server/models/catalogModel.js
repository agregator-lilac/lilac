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
})

module.exports = mongoose.model('Catalog', catalogsSch, 'catalogs')
