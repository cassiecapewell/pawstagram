const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home")
const authController = require("../controllers/auth")
const postsController = require("../controllers/posts")
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// Main Routes

//Home Route - tell controller to serve index.ejs
router.get("/", homeController.getIndex);

// Profile Route
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);



//login In Routes
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)

router.get('/logout', authController.logout)

//Sign Up Routes - tell controller to serve signup.ejs
router.get('/signup', authController.getSignUp);
//Posts sign up to db
router.post('/signup', authController.postSignUp);




module.exports = router;