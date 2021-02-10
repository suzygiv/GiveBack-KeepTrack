const router = require("express").Router();
const GivebackController = require("../../controllers/givebackcontroller")

//request to login route
//request to sign up route


//post routes
//get routesta

router.post("/submissiondb/giveback", GivebackController.create);

router.get("/submissiondb/keeptrack", function (req, res) {
    res.status(200).json(req.user);
});

module.exports = router
