var express = require("express");
var router = express.Router();
var Chart = require('chart.js');

router.get("/home", function (req, res, next) {
  res.render("dashboard", {
    style: ["modalAddAll.css", "dashboard.css"],
    js: ["modalAddAll.js"],
  });
});

module.exports = router;
