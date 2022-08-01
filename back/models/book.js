const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'Unknown'
  },
  author: {
    type: String,
    default: 'Unknown'
  },
  numberOfPages: {
    type: Number,
    required: true
  },
  wasRead: {
    type: Boolean,
    default: false
  },
  pagesRead: {
    type: Number,
    default: 0
  },
  notes: String,
  cover: {
    type: String,
    default: 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

bookSchema.set('toJSON', (document, returnedObj) => {
  returnedObj.id = returnedObj._id.toString()
  delete returnedObj._id
  delete returnedObj.__v
})

module.exports = mongoose.model('Book', bookSchema)

