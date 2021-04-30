// render the index.ejs home view
module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs")
  },
  getStatic: (req, res) => {
    res.render("static.ejs")
  }
};