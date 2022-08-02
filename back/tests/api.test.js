const app = require('../app')
const User = require('../models/user')
const Book = require('../models/book')
const supertest = require('supertest')


const api = supertest(app)

beforeEach(async () => {
  await Book.deleteMany({})
  await User.deleteMany({})
})

test('Retrieves all users correctly', async () => {
  const users = await api
    .get('/allUsers')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  expect(users.body).toHaveLength(0)
})