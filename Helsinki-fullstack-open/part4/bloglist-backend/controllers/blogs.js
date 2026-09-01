const Blog = require('../models/blog')

const router = require('express').Router()

router.get('/', (request, response) => {
  Blog.find({}).then(blogs => {
    response.json(blogs)
  })
})

router.post('/', async (request, response) => {
  const blog = new Blog(request.body)

  const savedBlog = await blog.save()

  response.status(201).json(savedBlog)
})

module.exports = router