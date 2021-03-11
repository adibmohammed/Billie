const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
  userId : {type: Schema.Types.ObjectId, ref: 'user'},
  title: String,
  source: {
    type: String,
    enum: ["Main Income", "Secondary Income", "Other"],
  },
  amount: {
    type: Number,
    required: true,
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

const IncomeModel = mongoose.model("income", IncomeSchema);
module.exports = IncomeModel;
