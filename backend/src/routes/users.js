const express = require('express')
const User = require('../models/user')
const Product = require('../models/product')

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}
  res.send(await User.find(query).catch(error => console.log('Users not found, error: ', error)))
})

router.get('/initialize', async (req, res) => {
  const yunus = new User({ username: 'Yunus', firstName: 'Yunus', lastName: 'Cetin', age: 38, email: 'y@gmail.com' })
  await yunus.setPassword('test')
  await yunus.save()
})
/* POST user */
/* router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.status(201).send(createdUser)
})
*/
// with userId
/* router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
}) */

// to delete user with Id
/* router.delete('/:userId', async (req, res) => {
  await User.findByIdAndDelete(req.params.userId)
  res.sendStatus(200)
}) */

module.exports = router
