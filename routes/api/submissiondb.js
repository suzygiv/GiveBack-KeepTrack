const router = require("express").Router();
const GivebackController = require("../../controllers/givebackcontroller")

//request to login route
//request to sign up route


//post routes
//get routesta

router.post("/submissiondb/giveback", GivebackController.create);

router.get("/submissiondb/keeptrack", GivebackController.findAll);

module.exports = router
