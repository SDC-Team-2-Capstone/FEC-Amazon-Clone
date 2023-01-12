/* ==================== Dependencies ==================== */

const express = require("express");
const config = require("./config.js");
const cors = require("cors");
const { MongoClient } = require("mongodb");

/* ==================== Initialize Express ==================== */
const app = express();
const port = process.env.PORT || 8081;

/* ==================== Initialize Client ==================== */

const client = new MongoClient({ connectionString: config.connectionString });
client.connect;

const mongoose = require("mongoose");
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

/* ==================== Create Model for Data ==================== */

const MyModel = mongoose.model("MyModel", { name: String });

/* ==================== Middleware ==================== */

app.use(cors());
app.use(express.json());

//Define the schema
const MessageSchema = newmongoose.Schemua({
  message: toString,
});

//Create a model from the schema
const Message = mongoose.model("Message", MessageSchema);

/* ========== General ========== */

//Define 'hello world' route
app.get("/helloworld", (req, res) => {
  Message.findOne({ message: "Hello World" }, (err, message) => {
    if (err) return res.status(500).send(err);
    // Return the message as a response
    res.send(message);
  });
});

// app.get('/', (req, res) => {
//   MyModel.find((err, data) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true, data: data });
//   });
// });

/* ==================== Listener ==================== */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
