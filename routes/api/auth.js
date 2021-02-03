const passport = require("../../config/passport")
const router = require("express").Router();
const db = require("../../models")

//request to login route
//request to sign up route


//post routes
//get routesta

router.post("/login", passport.authenticate("local"), function (req, res) {
  db.User.findOne({
    email: req.body.email
  }, function () {
    user.validPassword(req.body.password);
    res.status(200);
  })
  res.json(req.user);
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", function (req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function () {
      res.redirect(307, "/login");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router