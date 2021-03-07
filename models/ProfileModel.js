const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
 
    profileType: {
        type: String,
        enum : ["Family", "Business", "Student", "Standard"]
    }
})

const ProfileModel = mongoose.model("album", ProfileSchema);

module.exports = ProfileModel;

