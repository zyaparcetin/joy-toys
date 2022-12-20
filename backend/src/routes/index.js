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

  const teddyBearProduct = await Product.create({ name: 'teddyBear', price: 19.99 })
  const kittyProduct = await Product.create({ name: 'kitty', price: 14.99 })
  const bunnyProduct = await Product.create({ name: 'bunny', price: 9.99 })
  const frogletProduct = await Product.create({ name: 'froglet', price: 9.99 })

  await Kerem.likeProduct(teddyBearProduct)
  await Kerem.addToBasket(teddyBearProduct)

  await Mete.likeProduct(frogletProduct)
  await Mete.addToBasket(frogletProduct)

  console.log(Kerem)
  res.sendStatus(200)
})

module.exports = router
