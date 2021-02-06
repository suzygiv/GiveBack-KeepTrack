const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/auth");
const submissiondbRoutes = require("./api/submissiondb")


// API Routes
router.use("/api/auth", apiRoutes);
router.use("/api", submissiondbRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
