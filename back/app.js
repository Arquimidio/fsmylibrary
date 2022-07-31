const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const booksRouter = require('./routes/booksRouter')
const authRouter = require('./routes/authRoutes')
const { extractToken, extractUser } = require('./utils/middleware')
const config = require('./utils/config')

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => {
    console.log("Failed connecting to db", error.message)
  })

app.use(express.json())
app.use(cors())
app.use(extractToken)
app.use('/', authRouter)
app.use('/api/books', extractUser, booksRouter)

module.exports = app
