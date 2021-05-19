const catalogModel = require('../models/catalogModel.js')

const getAllcatalog = async (req, res) => {
  let orders = await catalogModel.find()
  orders = JSON.parse(JSON.stringify(orders))
  res.json(orders)
}

const getItemById = async (req, res) => {
  const { id } = req.params
  let orders = await catalogModel.findById(id)
  orders = JSON.parse(JSON.stringify(orders))
  res.json(orders)
}

const deleteOrder = async (req, res) => {
  let order = await catalogModel.deleteOne({ ...req.body })
  console.log(order)
  res.json(order)
}

const addItem = async (req, res) => {
  const task = new catalogModel({ ...req.body })
  await task.save()
  res.json({ data: 321 })
}

module.exports.getAllcatalog = getAllcatalog
module.exports.addItem = addItem
module.exports.deleteOrder = deleteOrder
module.exports.getItemById = getItemById
