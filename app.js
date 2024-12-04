const express = require('express')
const app = express()

require('dotenv').config()
require('express-async-errors')

// security Packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')
// const router = require('')
//connectDB
const connectDb = require('./DB/connect')

// Router

//Error Handler

app.use(helmet())
app.use(cors())
app.use(xss())

app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100,
  })
)
app.use(express.json())
app.use(express.static('./public'))

// app.use('/api/v1', router)

app.get('/', (req, res) => res.send('Library Management System'))

port = process.env.PORT || 8080

start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    app.listen(port, () => console.log('app is listening on port 8080'))
  } catch (error) {
    console.log(`error occured ${error}`)
  }
}

start()
