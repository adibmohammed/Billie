const express = require("express");
const router = express.Router();
const UsersModel = require("./../../models/UserModel");

// GET users:

router.get('/users', function(req, res, next) {
    UsersModel.find()
    .then((dbRes) => {
        res.render('showUsers.hbs', {myUsers: dbRes})
    })
    .catch((dbError) => {
        next(dbError)
    })
})







module.exports = router;