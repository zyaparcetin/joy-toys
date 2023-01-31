const request = require('supertest')
const app = require('../src/app')
// const user = require('../src/models/user')

describe('User endpoints', () => {
  it('POST request to /users should create a user', async () => {
    const userToCreate = {
      name: `Somename1${Date.now()}`,
      age: 12,
      email: `Somename1${Date.now()}@example.com`,
    }

    const createdUser = (await request(app).post('/api/users').send(userToCreate)).body

    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
  })

  it('GET request to /users should list users', async () => {
    const userList = (await request(app).get('/api/users')).body
    const userExist = userList.length > 0

    expect(userExist).toBe(true)
  })

  it('user should be able to add a product to cart', async () => {
    // create a user
    const userToCreate = {
      name: `Somename${Date.now()}`,
      age: 12,
      email: `Somename${Date.now()}@example.com`,
    }
    // create a product
    const productToCreate = {
      name: `Somename${Date.now()}`,
      price: 15,
      likedBy: [],
      reviews: [],
    }

    const createdUser = (await request(app).post('/api/users').send(userToCreate)).body
    const createdProduct = (await request(app).post('/api/products').send(productToCreate)).body
    // eslint-disable-next-line no-underscore-dangle
    const createdUserCart = (await request(app).post('/api/users/cart').send(createdProduct._id)).body
    const userCartExist = createdUserCart.length > 0

    expect(userCartExist).toBe(true)

    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)

    expect(createdProduct.name).toBe(productToCreate.name)
    expect(createdProduct.price).toBe(productToCreate.price)
    expect(createdProduct.likedBy).toBe(productToCreate.likedBy)
    expect(createdProduct.reviews).toBe(productToCreate.reviews)

    // expect(createdUser.likes).toContain(userToCreate.likes)
    // expect(createdProduct.likedBy).toContain(productToCreate.likedBy)
  })
  /* it('user should be able to add a product to basket', async () => {
    const productToCreate = {
      name: 'Dog',
      price: 3,
    }
    const createdProduct = await createdUser.addToBasket(createdProduct)
    expect(createdUser.basket).toContain(createdProduct)
  }) */
})

// in template:
/* const request = require('supertest')
const app = require('../src/app')

describe('User endpoints', () => {
  it('POST request to /api/users should create a user', async () => {
    const userToCreate = {
      name: `Somename${Date.now()}`,
      age: 27,
      bio: 'Been there. Done that.',
    }

    const createdUser = (await request(app).post('/api/users').send(userToCreate)).body

    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
    expect(createdUser.bio).toBe(userToCreate.bio)
  })

  it('GET request to /users should list users', async () => {
    const userList = (await request(app).get('/api/users')).body
    const userExist = userList.length > 0

    expect(userExist).toBe(true)
  })
}) */
