const { test } = require('node:test')
const assert = require('node:assert')
const supertest = require('supertest')
const mongoose = require('mongoose')
const dns = require('dns')
const config = require('../utils/config')
const app = require('../app')

dns.setServers(['8.8.8.8', '1.1.1.1'])

const api = supertest(app)

mongoose.connect(config.MONGODB_URI)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test.after(async () => {
  await mongoose.connection.close()
})