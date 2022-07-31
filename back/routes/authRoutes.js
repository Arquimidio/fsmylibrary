const express = require('express')
const router = express.Router()
const {
  allUsers,
  login_post, 
  signup_post,
  retrieve_post
} = require('../controllers/authController')

router.route('/allUsers').get(allUsers)
router.route('/login').post(login_post)
router.route('/signup').post(signup_post)
router.route('/retrieve').post(retrieve_post)

module.exports = router