const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const { validateUserSignUp } = require('../handlers/middlewares/validations/uservalidation')

router.get('/users', userController.getAllUsers)
router.get('/users/:userId', userController.getAUser);
router.get('/login', userController.userLogin);
router.post('/register', validateUserSignUp, userController.signup)

module.exports = router