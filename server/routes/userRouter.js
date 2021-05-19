const Router = require('express').Router
const userControler = require('../controllers/userControler.js')

const userRouter = Router()
userRouter.post('/auth', userControler.auth)

userRouter.post('/register', userControler.register)

module.exports = userRouter
