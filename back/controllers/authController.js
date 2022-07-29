const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const allUsers = async (req, res) => {
  const users = await User.find({}).populate()
  res.status(200).json(users)
}

const login_post = async (req, res) => {
  const { email, password } = req.body
  const { token, user } = await User.login(email, password)
  delete user._doc.passwordHash
  res.status(200).json({ 
    token, 
    ...user._doc
  })
}

const signup_post = async (req, res) => {
  const { email, password, name } = req.body
  const user = await User.signup(name, email, password)

  const token = jwt.sign({
    email: user.email,
    id: user.id
  }, config.SECRET)

  delete user._doc.passwordHash
  
  res.status(200).json({ 
    token, 
    ...user._doc 
  })
}

module.exports = {
  allUsers,
  login_post,
  signup_post
}