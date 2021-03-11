const express = require("express");
const router = new express.Router();
const UserModel = require("../../models/UserModel");
const ExpensesModel = require("./../../models/ExpensesModel");
const protectRoute = require('./../../middlewares/protectRoute');

/* GET delete expense */
router.get("/expenses/delete/:id", protectRoute, (req, res) => {
  ExpensesModel.findByIdAndDelete(req.params.id)
    .then((dbRes) => {
      return UserModel.findByIdAndUpdate(req.session.currentUser._id, {
        $pull: { myexpense: dbRes._id },
      })
    })
    .then(() => {res.redirect("/expenses")})
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
