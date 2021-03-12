const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: {
    type: String,
	unique: true,
	required: true,
    validate: (email) => {
      return Boolean(
        email.match(
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        )
      );
    },
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    enum: ["Family", "Business", "Student", "Standard"],
  },
  gender: {
    type: String,
    enum: ["Woman", "Man", "Prefer Not To"],
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/djogypr9r/image/upload/v1615377754/qcrteapita6niecfbf1y.jpg",
  },
  myexpense: [{ type: Schema.Types.ObjectId, ref: "expenses" }],
  myincome: [{ type: Schema.Types.ObjectId, ref: "income" }],
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
