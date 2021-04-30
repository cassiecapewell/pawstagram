const mongoose = require("mongoose");


const PostSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
    require: true,
  }

})

module.exports = mongoose.model('Post', PostSchema)