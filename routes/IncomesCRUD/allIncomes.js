const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");

//The page showing only the incomes

router.get("/incomes", (req, res, next) => {
  IncomeModel.find(req.body)
    .then((dbRes) => {
      res.render("incomes/allIncomes", {
        incomes: dbRes,
        style: ["allEntries.css","modalAddAll.css"], 
        js: ["modalAddAll.js"]
      });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
