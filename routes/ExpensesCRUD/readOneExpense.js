const express = require("express");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");
const protectRoute = require('./../../middlewares/protectRoute');

/* GET read one expense */
router.get("/expenses/details/:id", protectRoute, (req, res) => {
  ExpensesModel.findById(req.params.id)
    .then((expense) =>
      res.render("expenses/readExpense.hbs", {
        expense,
        style: ["readOneEntry.css"],
      })
    )
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
