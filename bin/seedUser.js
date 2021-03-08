// Creating a test dataset:

require("dotenv").config();
require("./../config/mongodb");

const UserModel = require("./../models/UserModel");

const users = [
  {
    firstname: "Mona",
    lastname: "Bellucci",
    username: "Mona",
    email: "mon@gmail.com",

    password: "1234Lisa",

    profile: "Standard",
    gender: "Woman",
    avatar: "",
  },

  {
    firstname: "Lisa",
    lastname: "Johnson",
    username: "Lisaj",
    email: "lis@gmail.com",

    password: "lisaaa",

    profile: "Standard",
    gender: "Woman",
    avatar: "",
  },
];

UserModel.create(users)
  .then((dbRes) => {
    console.log(dbRes);
  })
  .catch((error) => {
    console.log(error);
  });
