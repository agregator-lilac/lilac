const express = require('express')
const next = require('next')
const mongoose = require('mongoose')

const indexRouter = require('./routes/indexRouter.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000
mongoose.connect(
  'mongodb+srv://GBTest:1qaz1qaz@gbtest-denba.mongodb.net/test?retryWrites=true&w=majority',
  // 'mongodb://GBTest:1qaz1qaz@gbtest-shard-00-00.denba.mongodb.net:27017,gbtest-shard-00-01.denba.mongodb.net:27017,gbtest-shard-00-02.denba.mongodb.net:27017/test?ssl=true&replicaSet=GBTest-shard-0&authSource=admin&retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

app.prepare().then(() => {
  const server = express()
  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))
  server.use('/api', indexRouter)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
