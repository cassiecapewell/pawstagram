const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home")
const authController = require("../controllers/auth")
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// Main Routes

//Home Route - tell controller to serve index.ejs
router.get("/", homeController.getIndex);

//Sign Up Routes - tell controller to serve signup.ejs
router.get('/signup', authController.getSignUp);
router.post('/signup', authController.postSignup)
//login In Routes
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)

router.get('/logout', authController.logout)




module.exports = router;