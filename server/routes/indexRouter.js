const Router = require('express').Router
const reviewsRouter = require('./reviewsRouter.js')
const catalogRouter = require('./catalogRouter.js')
const userRouter = require('./userRouter.js')
const buisnessUserRouter = require('./buisnessUserRouter')
const orderRouter = require('./orderRouter.js')

const indexRouter = Router()
indexRouter.use(catalogRouter)
indexRouter.use(reviewsRouter)
indexRouter.use(userRouter)
indexRouter.use(buisnessUserRouter)
indexRouter.use(orderRouter)

module.exports = indexRouter
