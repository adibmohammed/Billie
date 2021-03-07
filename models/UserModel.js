const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

 username: String,
 email: {
     type: String,
     unique: true,
     required: true
 },
 password: {
     type: String,
     required: true,
 },
 profile: {
     type: String,
     enum : ["Family", "Business", "Student", "Standard"]
 },
 gender: {
     type: String,
     enum: ["Woman", "Man", "Prefer Not To"]
 }
})

const UserModel = mongoose.model("user", userSchema)
module.exports = UserModel;