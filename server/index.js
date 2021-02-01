const express = require('express')
const next = require('next')
const mongoose = require('mongoose')

const reviewsRouter = require('./routes/reviewsRouter.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000
mongoose.connect(
	'mongodb+srv://${USER_DB}:${process.env.PASS_DB}@${process.env.HOST_DB}/${process.env.NAME_DB}?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

app.prepare().then(() => {
  const server = express()
  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))
  server.use('/api', reviewsRouter)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
