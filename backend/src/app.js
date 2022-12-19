require('dotenv').config({ debug: process.env.DEBUG, path: '../.env' })
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')
const User = require('./models/user')

require('./database-connection')

const clientPromise = mongoose.connection.asPromise().then(connection => connection.getClient())

const indexRouter = require('./routes/index')
const accountRouter = require('./routes/account')
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')

const app = express()
app.use(
  cors({
    origin: true,
    credentials: true,
  })
)

// if (app.get('env') === 'development') {
/* eslint-disable-next-line */

// app.use(
// eslint-disable-next-line import/no-extraneous-dependencies

// require('connect-livereload')()
// )

/* eslint-disable-next-line */

/* require('livereload')
    .createServer({ extraExts: ['pug'] })

    .watch([`${__dirname}/public`, `${__dirname}/views`])
} */

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'images', 'favicon.ico')))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  session({
    secret: 'superdupersecuresecret',
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({ clientPromise, stringify: false }),
    cookie: {
      maxAge: 14 * 24 * 60 * 60 * 1000,
      path: '/api',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      secure: process.env.NODE_ENV === 'production',
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/', indexRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)
app.use('/api/account', accountRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
