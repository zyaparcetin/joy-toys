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

// to add a product to cart
router.post('/cart', async (req, res) => {
  const product = await Product.findById(req.body.productId)
  if (!product) throw new Error('Product not found!')
  await req.user.addToCart(product)
  res.send(req.user.cart)
})

// eslint-disable-next-line func-names
router.delete(':productId', async function (req, res, next) {
  try {
    // await Cart.findByIdAndDelete(req.body.productId)
    // eslint-disable-next-line no-underscore-dangle
    await User.cart.findOneAndUpdate({ $pull: { items: req.params.productId } })
    // req.user.cart.items.pull(req.body.productId)
    // req.user.cart.save()
    res.sendStatus(200)
  } catch (e) {
    next(e)
  }
})

module.exports = router
