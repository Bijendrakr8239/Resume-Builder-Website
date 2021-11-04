const mongoose = require("mongoose");

const db = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gtbc6.mongodb.net/RESUME?retryWrites=true&w=majority`;

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("connected to db")
);

module.exports = mongoose;