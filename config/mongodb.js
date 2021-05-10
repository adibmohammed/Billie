const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(
  "mongodb+srv://Billie-dep-2:CB6fDpRQmogQKQ1L@cluster0.mg8ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () =>
  console.log("yay mongodb connected :)")
);

mongoose.connection.on("error", () => console.log("nay db error sorry :("));
