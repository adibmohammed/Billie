const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
title: String,
category: {
    type: String,
    enum: ["Housing", "Health", "Transportation", "Groceries", "Shopping", "Car"]
},
categoryExtra: [
    
]
 
,
})

const ExpensesModel = mongoose.model("expenses", userSchema)
module.exports = UserModel;

// [{type: Schema.Types.ObjectId, ref: "UserModel"}]