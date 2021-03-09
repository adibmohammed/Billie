const express = require("express");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");

/* GET read one expense */
router.get("/expenses/details/:id", (req, res) => {
  ExpensesModel.findById(req.params.id)
    .then((expense) =>
      res.render("expenses/readExpense.hbs", {
        expense,
        style: "readOneEntry.css",
      })
    )
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
