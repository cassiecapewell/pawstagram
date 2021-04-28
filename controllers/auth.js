// render the signup.ejs signup view

exports.getSignUp = (req, res)=> {
  res.render("signup", {
    title: "Create Account",
  });
}