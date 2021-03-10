const express = require("express");
const router = express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");
const uploader = require("./../../config/cloudinary");
const protectRoute = require('./../../middlewares/protectRoute');

/* GET create expense */
router.get("/expenses/new", protectRoute, (req, res, next) => {
  res.render("expenses/createExpense.hbs", {
    style: ["createOne.css", "modalAddAll.css"],
    js: ["modalAddAll.js"],
  });
});

/* POST create expense */


router.post("/expenses/new", uploader.single('picture'), async (req, res, next) => {
  const newExpense = { ...req.body };
  
  if (!req.file) newExpense.picture = undefined;
  else newExpense.picture = req.file.path;

  try {
    await ExpensesModel.create(newExpense);
    res.redirect("/expenses"); //redirecting to the list of incomes only
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
