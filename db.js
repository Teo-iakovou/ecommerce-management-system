require("dotenv").config();

const mongodb = require("mongodb");

const uri = process.env.MONGO_URI;

const client = new mongodb.MongoClient(uri);

function run() {
  return client
    .connect()
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
}

module.exports = { run, client };
