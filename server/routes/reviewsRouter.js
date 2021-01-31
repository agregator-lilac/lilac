const Router = require('express').Router
const reviewsControler = require('../controllers/reviewsController.js')

const reviewsRouter = Router()
reviewsRouter.get('/reviews', reviewsControler.getAllReviews)

reviewsRouter.post('/reviews', reviewsControler.addNewReview)

module.exports = reviewsRouter
