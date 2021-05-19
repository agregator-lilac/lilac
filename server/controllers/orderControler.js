const orderModel = require('../models/ordersModel.js')

const getMyOrders = async (req, res) => {
  const { _id } = req.params
  let orders = await orderModel.find({ creator: _id })
  orders = JSON.parse(JSON.stringify(orders))
  res.json(orders)
}

const getBuisnessOrders = async (req, res) => {
  const { _id } = req.params
  let orders = await orderModel.find()
  orders = JSON.parse(JSON.stringify(orders))
  res.json(orders)
}

const deleteOrder = async (req, res) => {
  let order = await orderModel.deleteOne({ ...req.body })
  console.log(order)
  res.json(order)
}

const addOrder = async (req, res) => {
  const task = new orderModel({ ...req.body })
  await task.save()
  res.json({ data: 321 })
}

module.exports.getMyOrders = getMyOrders
module.exports.addOrder = addOrder
module.exports.deleteOrder = deleteOrder
module.exports.getBuisnessOrders = getBuisnessOrders
