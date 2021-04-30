// import the Post model
const Post = require('../models/post')


module.exports = {

  //im assuming this was just copied in from a Todos project? - jm
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('post.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },

    getPost: async (req, res) => {
      try {
          const post = await Post.findById(req.params.id)
          res.render('post.ejs', {post: post, user: req.user})
      } catch (err){
        console.log(err)
      }
    }
    // finds the post in the database that matches the id (from ":id" in the route) -cc




    // createPost: async (req, res) => {
    //   try {
        
    //   }catch(err){
        
    //   }
    // },


}    