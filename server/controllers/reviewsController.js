const reviewsModel = require('../models/reviewsModel.js')

const getAllReviews = async (req, res) => {
  let tasks = await reviewsModel.find()
  tasks = JSON.parse(JSON.stringify(tasks))
  res.json(tasks)
}

const addNewReview = async (req, res) => {
  const task = new reviewsModel({ ...req.body })
  await task.save()
  res.json({ data: 321 })
}

module.exports.getAllReviews = getAllReviews
module.exports.addNewReview = addNewReview
