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

  const teddyBearProduct = await Product.create({
    name: 'Teddy Bear',
    price: 19.99,
    photo: 'https://media.cdn.kaufland.de/product-images/2048x2048/2d4b73264a5648246f89ee0ca904fb47.webp',
  })
  const kittyProduct = await Product.create({
    name: 'Kitty',
    price: 14.99,
    photo: 'https://i.etsystatic.com/29687139/r/il/54538e/3776906257/il_794xN.3776906257_9ccq.jpg',
  })
  const bunnyProduct = await Product.create({
    name: 'Bunny',
    price: 9.99,
    photo: 'https://i.etsystatic.com/33732634/r/il/fedaff/3797424425/il_794xN.3797424425_9jge.jpg',
  })
  const frogletProduct = await Product.create({
    name: 'Froglet',
    price: 9.99,
    photo: 'https://www.botteghe-aperte.com/public/cache/a1b9c2a688ed695abe3610c28f97b5b5_w400_h400.jpg',
  })
  const duckProduct = await Product.create({
    name: 'Duck',
    price: 4.99,
    photo:
      'https://www.jiomart.com/images/product/600x600/rvmjxrwklw/enorme-duck-family-chu-chu-sound-baby-bathing-rubber-toys-4-set-yellow-floating-ducklings-product-images-orvmjxrwklw-p591224262-2-202204270948.jpg',
  })
  const dollProduct = await Product.create({
    name: 'Doll',
    price: 19.99,
    photo: 'https://i.etsystatic.com/18931976/r/il/533752/4491563059/il_794xN.4491563059_sc80.jpg',
  })
  const horseProduct = await Product.create({
    name: 'Horse',
    price: 14.99,
    photo: 'https://www.jellycat.com/images/products/medium/OR6H.jpg',
  })
  const birdyProduct = await Product.create({
    name: 'Birdy',
    price: 4.99,
    photo: 'https://www.jellycat.com/images/products/large/LOV3B.jpg',
  })

  await Kerem.likeProduct(teddyBearProduct)
  await Kerem.addToCart(teddyBearProduct)

  await Mete.likeProduct(frogletProduct)
  await Mete.addToCart(frogletProduct)

  console.log(Kerem)
  res.sendStatus(200)
})

module.exports = router
