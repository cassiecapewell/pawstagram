const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require('./config/database')
const mainRoutes = require("./routes/main");

connectDB()

// To use ejs for views
app.set("view engine", "ejs")

// Leon's favorite line of code ever!
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", mainRoutes);

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})  