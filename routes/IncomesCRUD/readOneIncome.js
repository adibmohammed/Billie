const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");

router.get('/income-details/:id', (req, res, next) => {
    IncomeModel.findById(req.params.id) //find the selected income
    .then((dbRes) => {
        res.render('incomes/readOneIncome', {income : dbRes}); //rendering the details of selected income
    })
    .catch((err) => {
        console.log(err);
        next(err);
    })
})



module.exports = router;