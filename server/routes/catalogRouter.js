const Router = require('express').Router
const catalogControler = require('../controllers/catalogController.js')

const catalogRouter = Router()
catalogRouter.get('/catalog', catalogControler.getAllcatalog)

catalogRouter.post('/catalog', catalogControler.addItem)
catalogRouter.delete('/catalog', catalogControler.deleteOrder)
catalogRouter.get('/catalog/:id', catalogControler.getItemById)

module.exports = catalogRouter
