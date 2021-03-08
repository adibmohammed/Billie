const express = require("express");
const router = express.Router();
const UsersModel = require("./../../models/UserModel");


router.get('/users/delete/:id', async (req, res, next) => {
    try {
        await UsersModel.findByIdAndDelete(req.params.id)
        res.redirect('/users')
    } catch (err){
        next(err)
    }
})




module.exports = router;