const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
    })
    .then(() => console.log("Connection to DB successful"))
    .catch((err) => console.error(err));
};

module.exports = connectDB;
