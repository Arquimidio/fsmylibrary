const Book = require('../models/book')

const create = async (req, res) => {
  const { 
    title, 
    author, 
    numberOfPages,
    wasRead,
    pagesRead,
    cover,
    notes 
  } = req.body

  const { user } = req

  const book = new Book({
    title,
    author,
    numberOfPages,
    wasRead,
    pagesRead,
    notes,
    cover,
    user: user.id
  })

  const savedBook = await book.save()
  user.books = user.books.concat(savedBook._id)
  await user.save()

  res.status(200).json(savedBook)
}

const remove = async (req, res) => {
  const { id } = req.params
  const user = req.user

  const book = await Book.findById(id)

  if(book.user.toString() === user.id){
    await Book.deleteOne(book)
    user.books = user.books.filter(bookId => bookId.toString() !== book.id)
    await user.save()
  }

  return res.status(204).end()
}

module.exports = {
  create,
  remove
}