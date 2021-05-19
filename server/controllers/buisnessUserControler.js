const jwt = require('jsonwebtoken')
const buisnessUserModel = require('../models/buisnessUserModel.js')

const auth = async (req, res) => {
  const { username, password } = req.body

  const user = await buisnessUserModel.findOne({ email: username })

  if (!user) {
    return res.status(401).send()
  }

  if (!user.validatePassword(password)) {
    return res.status(401).send()
  }

  const plainData = JSON.parse(JSON.stringify(user))
  delete plainData.password

  res.status(200).json({
    ...plainData,
    token: jwt.sign(plainData, 'Very secret code'),
  })
}

const register = async (req, res) => {
  const { repassword, ...restBody } = req.body
  if (restBody.password === repassword) {
    const user = new buisnessUserModel(restBody)
    await user.save()
    return res.status(201).send()
  } else {
    res.status(400).json({ messageError: 'Error registration!' })
  }
}

module.exports.auth = auth
module.exports.register = register
