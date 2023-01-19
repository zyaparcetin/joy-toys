const express = require('express')
const User = require('../models/user')
const Product = require('../models/product')

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}
  res.send(await User.find(query).catch(error => console.log('Users not found, error: ', error)))
})

/* POST user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.status(201).send(createdUser)
})

// with userId
router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

// to delete user with Id
router.delete('/:userId', async (req, res) => {
  await User.findByIdAndDelete(req.params.userId)
  res.sendStatus(200)
})

// to add basket a product
router.post('/cart', async (req, res) => {
  const product = await Product.findById(req.params.productId)
  if (!product) throw new Error('Product not found!')
  await req.user.addToCart(product)
  res.sendStatus(200)
})

module.exports = router
