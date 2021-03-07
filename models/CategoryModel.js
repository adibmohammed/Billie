const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
 
})

const CategoryModel = mongoose.model("album", CategorySchema);

module.exports = CategoryModel;

