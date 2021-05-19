const jwt = require('jsonwebtoken')
const checkAuth = (req, res, next) => {
  //Bearer <token>

  if (req.headers.authorization) {
    const [type, token] = req.headers.authorization.split(' ')

    //Валидация токена
    jwt.verify(token, 'Very secret code', (err, decoded) => {
      if (err) {
        return res.status(403).send()
      }

      req.user = decoded
      next()
    })
  } else {
    return res.status(403).send()
  }
}

module.exports = checkAuth
