const { test } = require('node:test')
const assert = require('node:assert')
const listHelper = require('./list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)

  assert.strictEqual(result, 1)
})

test('total likes', () => {
  const blogs = [
    {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5
    },
    {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12
    },
    {
      title: 'First class tests',
      author: 'Robert C. Martin',
      url: 'https://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
      likes: 3
    }
  ]

  const result = listHelper.totalLikes(blogs)

  assert.strictEqual(result, 20)
})

test('favorite blog', () => {
  const blogs = [
    {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5
    },
    {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12
    },
    {
      title: 'First class tests',
      author: 'Robert C. Martin',
      url: 'https://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
      likes: 3
    }
  ]

  const result = listHelper.favoriteBlog(blogs)

  assert.deepStrictEqual(result, blogs[1])
})

test('most blogs', () => {
  const blogs = [
    {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5
    },
    {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12
    },
    {
      title: 'First class tests',
      author: 'Robert C. Martin',
      url: 'https://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
      likes: 3
    },
    {
      title: 'TDD harms architecture',
      author: 'Robert C. Martin',
      url: 'https://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
      likes: 4
    },
    {
      title: 'Type wars',
      author: 'Robert C. Martin',
      url: 'https://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      likes: 4
    }
  ]

  const result = listHelper.mostBlogs(blogs)

  assert.deepStrictEqual(result, {
    author: 'Robert C. Martin',
    blogs: 3
  })
})