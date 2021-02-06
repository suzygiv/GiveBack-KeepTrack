const router = require("express").Router();
const db = require("../../models/giveback")

//request to login route
//request to sign up route


//post routes
//get routesta

router.post("/submissiondb/giveback", function (req, res) {
    res.status(200).json(req.user);
});

router.get("/submissiondb/keeptrack", function (req, res) {
    res.status(200).json(req.user);
});

module.exports = router
