//Defs want to add express in here. -Coby
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');

// import routes
const mainRoutes = require('./routes/main');
const postRoutes = require('./routes/posts');

// require multer and ejs - Jeff
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

// dot env
require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport);

// connect to db
connectDB();

// use ejs for views
app.set('view engine', 'ejs');

// use forms for put/delete
app.use(methodOverride("_method"));

// Leon's favorite line of code ever! -Coby
app.use(express.static('public'));

// body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// logging
app.use(logger('dev'));


// setup sessions - stored in mongoDB
app.use(
	session({
		secret: 'PlaceHolder',
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// use flash messages for errors, info, etc
app.use(flash());

// setup routes
app.use('/', mainRoutes);
app.use('/post', postRoutes);

// server running
app.listen(process.env.PORT, () => {
	console.log('Server is running, you better catch it!');
});
