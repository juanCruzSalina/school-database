// Mongoose call
const mongoose = require("mongoose");

// DB creation or call
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/alumn-teacher-db";

// DB connection
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
