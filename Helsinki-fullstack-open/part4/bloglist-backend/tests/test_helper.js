const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'HTML is easy',
    author: 'John Doe',
    url: 'https://example.com/html',
    likes: 5
  },
  {
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb
}