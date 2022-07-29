const jwt = require('jsonwebtoken')
const Book = require('../models/book')
const User = require('../models/user')
const config = require('../utils/config')


const getToken = (req) => {
  const authorization = req.get('authorization')
  if(authorization && authorization.toLowerCase().startsWith('bearer ')){
    console.log(authorization)
    return authorization.substring(7)
  }

  return null
}

const create = async (req, res) => {
  const { 
    title, 
    author, 
    numberOfPages,
    wasRead,
    pagesRead,
    notes 
  } = req.body

  const token = getToken(req)
  const decodedToken = jwt.verify(token, config.SECRET)

  if(!decodedToken.id){
    return res
      .status(401)
      .json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  const book = new Book({
    title,
    author,
    numberOfPages,
    wasRead,
    pagesRead,
    notes,
    user: user._id
  })

  const savedBook = await book.save()
  user.books = user.books.concat(savedBook._id)
  await user.save()

  res.status(200).json(savedBook)
}

module.exports = {
  create
}