const { test } = require('node:test')
const assert = require('node:assert')
const supertest = require('supertest')
const mongoose = require('mongoose')
const dns = require('dns')
const config = require('../utils/config')
const app = require('../app')
const Blog = require('../models/blog')

dns.setServers(['8.8.8.8', '1.1.1.1'])

const api = supertest(app)

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

test.beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(initialBlogs)
})

mongoose.connect(config.MONGODB_URI)

test('blogs are returned as json', async () => {
  const response = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  assert.strictEqual(response.body.length, initialBlogs.length)

  const titles = response.body.map(blog => blog.title)

  assert(titles.includes('HTML is easy'))
  assert(titles.includes('React patterns'))
})

test('a valid blog can be added', async () => {
  const newBlog = {
    title: 'A new blog',
    author: 'John Doe',
    url: 'https://example.com/new-blog',
    likes: 10
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')

  assert.strictEqual(response.body.length, initialBlogs.length + 1)

  const titles = response.body.map(blog => blog.title)

  assert(titles.includes('A new blog'))
})

test('a blog without a title is not added', async () => {
  const newBlog = {
    author: 'John Doe',
    url: 'https://example.com/no-title',
    likes: 10
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

  const response = await api.get('/api/blogs')

  assert.strictEqual(response.body.length, initialBlogs.length)
})

test('a blog without likes defaults to zero', async () => {
  const newBlog = {
    title: 'Blog without likes',
    author: 'John Doe',
    url: 'https://example.com/no-likes'
  }

  const response = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  assert.strictEqual(response.body.likes, 0)
})

test('a blog with invalid likes is not added', async () => {
  const newBlog = {
    title: 'Blog with invalid likes',
    author: 'John Doe',
    url: 'https://example.com/invalid-likes',
    likes: 'not-a-number'
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

  const response = await api.get('/api/blogs')

  assert.strictEqual(response.body.length, initialBlogs.length)
})

test('a blog without a url is not added', async () => {
  const newBlog = {
    author: 'John Doe',
    likes: 5,
    title: 'Blog without url'
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

  
})

test.after(async () => {
  await mongoose.connection.close()
})