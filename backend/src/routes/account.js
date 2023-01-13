const express = require('express')
const passport = require('passport')

const router = express.Router()

const User = require('../models/user')
// const Product = require('../models/product')

/* GET home page. */
router.get('/session', (req, res) => {
  res.send(req.user)
})

router.post('/', async (req, res, next) => {
  const { name, age, email, password } = req.body

  try {
    const user = await User.register({ name, age, email }, password)
    res.send(user)
  } catch (e) {
    next(e)
  }
})

router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

router.delete('/session', async (req, res, next) => {
  req.logout(err => {
    if (err) return next(err)
    return req.session.regenerate(error => {
      if (error) return next(error)

      return res.sendStatus(200)
    })
  })
})

module.exports = router
