const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstname: String,
	lastname: String,
	username: String,
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	profile: {
		type: String,
		enum: [ 'Family', 'Business', 'Student', 'Standard' ]
	},
	gender: {
		type: String,
		enum: [ 'Woman', 'Man', 'Prefer Not To' ]
	},
	avatar: {
		type: String,
		default: 'https://res.cloudinary.com/djogypr9r/image/upload/v1615377754/qcrteapita6niecfbf1y.jpg'
	},
	myexpense: [{ type: Schema.Types.ObjectId, ref: 'expenses' }],
	myincome: [{ type: Schema.Types.ObjectId, ref: 'income' }]
});

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
