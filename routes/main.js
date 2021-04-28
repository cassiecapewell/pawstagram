const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home")
const authController = require("../controllers/auth")

// Main Routes

//Home Route - tell controller to serve index.ejs
router.get("/", homeController.getIndex);

//Sign Up Routes - tell controller to serve signup.ejs
router.get('/signup', authController.getSignUp);




module.exports = router;