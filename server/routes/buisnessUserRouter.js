const Router = require('express').Router
const buisnessUserControler = require('../controllers/buisnessUserControler.js')

const buisnessUserRouter = Router()
buisnessUserRouter.post('/buisnessauth', buisnessUserControler.auth)

buisnessUserRouter.post('/buisnessregister', buisnessUserControler.register)

module.exports = buisnessUserRouter
