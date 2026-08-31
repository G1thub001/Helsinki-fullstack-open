const config = require('./utils/config')

const express = require('express')
const mongoose = require('mongoose')
const dns = require('dns')
const Blog = require('./models/blog')
const blogRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

dns.setServers(['8.8.8.8', '1.1.1.1'])

const app = express()

const url = config.MONGODB_URI

mongoose.connect(url)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch(error => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(express.json())
app.use('/api/blogs', blogRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


const PORT = config.PORT
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})

