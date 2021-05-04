// render the index.ejs home view
module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs")
  },
  getStatic: (req, res) => {
    res.render("static.ejs")
  }
};


// const Post = require('../models/post')


// module.exports = {
//  getIndex: async (req,res)=>{
//         try{
//             const posts = await Post.find({user:req.user.id})
//             res.render('index.ejs', {posts: posts, user: req.user})
//             console.log(`${user}`)
//             console.log('test')
//         }catch(err){
//             console.log(err)
//         }
//     },
// }