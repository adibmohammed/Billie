const express = require("express");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");

/* GET delete expense */
router.get("/expenses/delete/:id", (req, res) => {
  ExpensesModel.findByIdAndDelete(req.params.id)
    .then((dbRes) => {
      res.redirect("/expenses");
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
