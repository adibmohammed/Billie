const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
  title: String,
  category: {
    type: String,
    enum: [
      "Housing",
      "Health",
      "Transportation",
      "Groceries",
      "Shopping",
      "Car",
      "Holidays",
      "Accomodation",
      "School",
      "Social Activities",
      "Restaurants-cafes",
      "Subscriptions",
      "Other",
    ],
  },
  amount: {
	  type: Number,
	  required: true
  },
  date: {
    type: Date,
    required: true,
  },
  description: String,
  picture: {
    type: String,
    default:
      "https://res.cloudinary.com/djogypr9r/image/upload/v1615369163/Guide_Managing-business-travel-expenses_cxnwpz.png",
  },
});

const ExpensesModel = mongoose.model("expenses", ExpensesSchema);
module.exports = ExpensesModel;

// [{type: Schema.Types.ObjectId, ref: "UserModel"}]
