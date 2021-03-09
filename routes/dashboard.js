var express = require("express");
var router = express.Router();

router.get("/home", function (req, res, next) {
  res.render("dashboard", { style: "modalAddAll.css", js: ["modalAddAll.js"] });
});

module.exports = router;
