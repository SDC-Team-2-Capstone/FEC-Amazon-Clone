//dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//initialize express
const app = express();

//initialize Mongoose
const port = process.env.PORT || 8081;
const connectionString =
  "mongodb+srv://SDC-Team2:sdcpass@cluster0.uly8mno.mongodb.net/test";
// const connectionString = process.env.connectionString;
mongoose.connect(connectionString);

//middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//testing
app.get("/", (req, res) => {
  res.send("Connected to Mongo Backend");
});

/* ==================== Listener ==================== */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
