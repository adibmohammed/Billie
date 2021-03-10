const express = require("express");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");
const protectRoute = require('./../../middlewares/protectRoute');

/* GET delete expense */
router.get("/expenses/delete/:id", protectRoute, (req, res) => {
  ExpensesModel.findByIdAndDelete(req.params.id)
    .then((dbRes) => {
      res.redirect("/expenses");
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
