const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const UserModel = require('./../../models/UserModel');

// GET MEthod for signing in:

router.get('/signin', (req, res, next) => {
    res.render('Users/signin.hbs')
});


// POST Method for signing in:

router.post('/signin', async (req, res, next) => {
    const {email, password} = req.body;
    const foundUser = await  UserModel.findOne({email: email});
console.log("This is ", req.body);
    if(!foundUser) {
        req.flash('Error', 'Invalid Credentials');
        res.redirect('/signin');
    } else {
        const isSamePassword = bcrypt.compareSync(password, foundUser.password);

        if(!isSamePassword) {
            req.flash('Error', 'Invalid credentials');
            res.redirect('/signup');
        } else {
            const userObject = foundUser.toObject();
            delete userObject.password;

            req.session.currentUser = userObject;

            req.flash("success", "Welcome to your account");
            res.redirect('/home')
        }
    }
})

module.exports = router;