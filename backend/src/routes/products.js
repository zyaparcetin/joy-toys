const express = require('express')
const Product = require('../models/product')
const User = require('../models/user')
const Review = require('../models/review')

const router = express.Router()

/* GET products listing. */
router.get('/', async (req, res) => {
  const query = {}
  res.send(await Product.find(query).catch(error => console.log('Products not found, error: ', error)))
})

/* POST product */
router.post('/', async (req, res) => {
  const { name, price, photo } = req.body
  const createdProduct = await Product.create({ name, price, photo })
  res.status(200).send(createdProduct)
})

/* GET product by Id */
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.status(200).send(product)
})

/* GET product by search */
// router.post('/search', async (req, res) => {
//   try {
//     const searchResults = await searchDatabase(req.body.searchQuery)
//     res.send(searchResults)
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

/* router.post('/buy', async (req, res) => {
  try {
    // find the product in the database
    const product = await findProduct(req.body.productId)
    // update the stock
    await updateProductStock(product, req.body.quantity)
    // add the item to the user's cart
    await addProductToCart(req.body.productId, req.body.quantity, req.user.id)
    res.send('Product successfully added to cart')
  } catch (err) {
    res.status(500).send(err)
  }
}) */

module.exports = router
