var express = require("express");
const protectRoute = require("../middlewares/protectRoute");
var router = express.Router();

router.get("/home", protectRoute, function (req, res, next) {
  res.render("dashboard", { style: ["modalAddAll.css", "dashboard.css"], js: ["modalAddAll.js"] });
});

module.exports = router;
