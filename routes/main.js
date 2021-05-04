
const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home")
const authController = require("../controllers/auth")
const postsController = require("../controllers/posts")
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//home route - tells controller to serve index.ejs
router.get("/", homeController.getIndex);

// profile route
router.get("/profile", ensureAuth, postsController.getProfile);

// feed route
router.get("/feed", ensureAuth, postsController.getFeed);

//login routes
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)

// logout route
router.get('/logout', authController.logout)

//sign up routes - tells controller to serve signup.ejs
router.get('/signup', authController.getSignUp);

//Posts sign up to db (what does this do? -cc)
router.post('/signup', authController.postSignUp);




module.exports = router;