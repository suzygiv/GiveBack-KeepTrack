const passport = require ("../../config/passport") 
const router = require ("express").Router();
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


//request to login route
//request to sign up route


//post routes
//get routesta

router.post("/api/login", passport.authenticate("local"), function(req, res) {
    db.User.findOne({
        email: req.body.email
    },function(){
        user.validPassword(req.body.password);
        res.status(200);
    })
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page; this can be a little simpler by using res.redirect-- check back w Anthony about this
    if (req.user) {
      res.redirect("/welcome");
    }
    res.sendFile(path.join(__dirname, "../pages/signup"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/welcome");
    }
    res.sendFile(path.join(__dirname, "../pages/login"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/welcome", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../pages/welcome"));
  });


  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  module.exports = router