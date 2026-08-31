require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const dns = require('dns')

dns.setServers(['8.8.8.8', '1.1.1.1'])

const app = express()

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

// MongoDB connection will go here
const url = process.env.MONGODB_URI

mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog.find({}).then(blogs => {
    response.json(blogs)
  })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog.save().then(result => {
    response.status(201).json(result)
  })
})

// server startup will go here
const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})