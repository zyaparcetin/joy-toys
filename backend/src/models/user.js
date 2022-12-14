const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
const Review = require('./review')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      autopopulate: true,
    },
  ],
  basket: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      autopopulate: true,
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
      autopopulate: true,
    },
  ],
})

class User {
  greet() {
    console.log(`Hello ${this.name}, welcome to Joy Toys!`)
  }

  async likeProduct(product) {
    this.likes.push(product)
    product.likedBy.push(this.name)
    await this.save()
    await product.save()
  }

  async addToBasket(product) {
    this.basket.push(product)
    await this.save()
  }

  async review(product, text, rate) {
    const review = new Review(text, rate, this.name)
    this.reviews.push(review)
    product.reviews.push(review)
    await this.save()
    await review.save()
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('User', userSchema)

/* const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bio: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

class User {
  greet(person) {
    console.log(`Hello ${person.name}, this is ${this.name}`)
  }

  get profile() {
    return `
# ${this.name} (${this.age})
Bio: ${this.bio}
    `
  }

  set profile(newValue) {
    throw new Error(`profile is only a getter. You can't override it with ${newValue}.`)
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema) */
