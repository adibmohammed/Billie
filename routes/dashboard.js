var express = require("express");
const protectRoute = require("../middlewares/protectRoute");
var router = express.Router();

<<<<<<< HEAD
router.get("/home", protectRoute, function (req, res, next) {
  res.render("dashboard", { style: ["modalAddAll.css", "dashboard.css"], js: ["modalAddAll.js"] });
=======
router.get("/home", function (req, res, next) {
  res.render("dashboard", {
    style: ["modalAddAll.css", "dashboard.css"],
    js: ["modalAddAll.js"],
  });
>>>>>>> a9d405bc9148937610a17370c77c66a735a09d1b
});

module.exports = router;
