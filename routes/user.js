const express = require('express')

// Controller
const {signupUser, loginUser} = require('../controllers/userController')

const router = express.Router()

// Login
router.post('/login', loginUser)

// Sign Up
router.post('/signup', signupUser)


module.exports = router