const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');

const UserModel = require('./../../models/UserModel');


// GET MEthod for signing in:

router.get('/signin', (req, res, next) => {
	res.render('Users/signin.hbs', {
		
		style: [ 'signin.css' ]
	});
	
});

// POST Method for signing in:

router.post('/signin', async (req, res, next) => {
	
	const { email, password} = req.body;
	
	const foundUser = await UserModel.findOne({ email: email });
	console.log('This is ', req.body);
	if (!foundUser) {
        console.log("toto");
		req.flash('Error', 'Invalid Credentials');
		res.redirect('/signin');
	} else {
        console.log("tutu");
		const isSamePassword = bcrypt.compareSync(password, foundUser.password);
        console.log(isSamePassword);

		if (!isSamePassword) {
            console.log("titi");
			req.flash('Error', 'Invalid credentials');
			res.redirect('/signup');
		} else {
            console.log("tata");
			const userObject = foundUser.toObject();
			delete userObject.password;

			req.session.currentUser = userObject;
			console.log('this is userobject', req.session);

			req.flash('success', 'Welcome to your account');
			res.render('Users/showUsers.hbs')
			
		}
	}
});

//Populate Income and Expenses of the user:



module.exports = router;
