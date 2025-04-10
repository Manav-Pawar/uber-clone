const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      process.env.MONGODB_URL)
      .then(() => {
        console.log(`Your database is on ${process.env.MONGODB_URL}`);
      }).catch((err) => {
      console.error(err);
    });
}

module.exports= connectToDb