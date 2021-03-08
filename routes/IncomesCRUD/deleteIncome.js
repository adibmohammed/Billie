const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");


//Deleting a single income
router.post('/incomes/delete/:id', (req, res, next) => {
    IncomeModel.findByIdAndDelete(req.params.id) //find and delete the selected income
    .then(() => {
        res.redirect('/incomes'); // redirecting to the list of all incomes
    })
    .catch((err) => {
        console.log(err);
        next(err);
    })
})


module.exports = router;