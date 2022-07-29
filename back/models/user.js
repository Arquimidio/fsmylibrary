const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]   
})

userSchema.statics.signup = async function(name, email, password){
  const exists = await this.findOne({ email })
  if(exists){
    throw Error('Email already in use')
  }

  if(!email || !password){
    throw Error('All fields must be filled')
  }

  if(!validator.isEmail(email)){
    throw Error('Email is not valid')
  }

  /*
  if(!validator.isStrongPassword(password)){
    throw Error('Password not strong enough')
  }
  */

  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, salt)

  const user = await this.create(
    { email, name, passwordHash }
  )
  return user
}

userSchema.statics.login = async function(email, password){
  const user = await this.findOne({ email }).populate()

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(
      password,
      user.passwordHash
    )

  if(!(user && passwordCorrect)){
    throw new Error('Wrong password')
  }

  const userForToken = {
    email: user.email,
    id: user._id
  }

  const token = jwt.sign(userForToken, config.SECRET)
  return { token, user }
}

userSchema.set('toJSON',
  {
    transform: (document, receivedObj) => {
      receivedObj.id = receivedObj._id.toString()
      delete receivedObj._id
      delete receivedObj.__v
      delete receivedObj.passwordHash
    } 
  } 
)

module.exports = mongoose.model('User', userSchema)