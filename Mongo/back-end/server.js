//dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//initialize express
const app = express();

const uri = "mongodb+srv://SDC-Team2:sdcpass@cluster0.uly8mno.mongodb.net/test";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
connect();

const Schema = mongoose.Schema;
const recommendationsSchema = new Schema({
  product_img: { type: String, required: true },
  product_name: { type: String, required: true },
  product_seller: { type: String, required: true },
  num_reviews: { type: Number, required: true },
  operating_system: { type: String, required: true },
  price: { type: String, required: true },
  is_best_seller: { type: Boolean, required: true },
  is_prime_delivery: { type: Boolean, required: true },
  limited_time_end: { type: String, required: true },
  is_offers: { type: String, required: true },
  is_climate_friendly: { type: Boolean, required: true },
});

const Recs = mongoose.model("recs", recommendationsSchema);

//find all documents in a collection
Recs.find({}, function (err, users) {
  if (err) return handleError(err);
  console.log(users);
});

//find a single document in a collection
Recs.findOne({ product_seller: "Xbox" }, function (err, user) {
  if (err) return handleError(err);
  console.log(user);
});

//initialize Mongoose
const port = process.env.PORT || 8081;
// const connectionString =
("mongodb+srv://SDC-Team2:sdcpass@cluster0.uly8mno.mongodb.net/test");
// const connectionString = process.env.connectionString;
// mongoose.connect(connectionString);

//middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//testing
// app.get("/", (req, res) => {
//   res.send("Connected to Mongo Backend");
// });

/* ==================== Requests ==================== */

// app.get("/recs", (req, res) => {
//   const db = client.db(my_db);
//   const collection = db.collection("recs");

//   collection.find({}).toArray(function (err, docs) {
//     client.close();
//   });
// });

/* ==================== Listener ==================== */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
