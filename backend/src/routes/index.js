const express = require('express')
const User = require('../models/user')
const Product = require('../models/product')

const router = express.Router()

/* GET initialize */
router.get('/initialize', async (req, res) => {
  const Kerem = await User.create({ name: 'Kerem', age: 12, email: `kerem@example.com` })
  const Mete = await User.create({ name: 'Mete', age: 7, email: `mete@example.com` })

  Kerem.setPassword('test')
  Mete.setPassword('test')

  const teddyBearProduct = await Product.create({ name: 'Teddy Bear', price: 19.99 })
  const kittyProduct = await Product.create({ name: 'Kitty', price: 14.99 })
  const bunnyProduct = await Product.create({ name: 'Bunny', price: 9.99 })
  const frogletProduct = await Product.create({ name: 'Froglet', price: 9.99 })
  const duckProduct = await Product.create({ name: 'Duck', price: 4.99 })
  const dollProduct = await Product.create({ name: 'Doll', price: 19.99 })
  const horseProduct = await Product.create({ name: 'Horse', price: 14.99 })
  const birdyProduct = await Product.create({ name: 'Birdy', price: 4.99 })

  await Kerem.likeProduct(teddyBearProduct)
  await Kerem.addToBasket(teddyBearProduct)

  await Mete.likeProduct(frogletProduct)
  await Mete.addToBasket(frogletProduct)

  console.log(Kerem)
  res.sendStatus(200)
})

module.exports = router
