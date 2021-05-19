const Router = require('express').Router
const orderControler = require('../controllers/orderControler.js')
const checkAuth = require('../middleware/middleware.js')

const orderRouter = Router()
orderRouter.use(checkAuth)
orderRouter.get('/myorders/:id', orderControler.getMyOrders)
orderRouter.get('/orders/:id', orderControler.getBuisnessOrders)
orderRouter.post('/orders', orderControler.addOrder)
orderRouter.delete('/orders', orderControler.deleteOrder)

module.exports = orderRouter
