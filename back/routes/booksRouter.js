const express = require('express')
const router = express.Router()
const booksController = require('../controllers/booksController')

router.route('/')
      .post(booksController.create)

router.route('/:id')
      .delete(booksController.remove)


module.exports = router