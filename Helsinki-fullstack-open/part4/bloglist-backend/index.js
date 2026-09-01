const config = require('./utils/config')
const mongoose = require('mongoose')
const dns = require('dns')
const logger = require('./utils/logger')
const app = require('./app')

dns.setServers(['8.8.8.8', '1.1.1.1'])

const url = config.MONGODB_URI

mongoose.connect(url)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch(error => {
    logger.error('error connecting to MongoDB:', error.message)
  })

const PORT = config.PORT

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})