const mongoose = require('mongoose')

// eslint-disable-next-line prefer-const
let connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017'
// process.env.MONGODB_CONNECTION_STRING ||'mongodb+srv://root:ryPc2s2vJo4W2PmL@cluster0.1se81sd.mongodb.net/joytoys?retryWrites=true&w=majority'
console.log('connectionString', connectionString)
mongoose.set('debug', true)
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established', connectionString))
  .catch(error => console.log('not connected:', error))

module.exports = mongoose.connection
