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

/* ==================== Middleware ==================== */

app.use(cors());
app.use(express.json());

/* ========== General ========== */
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/recommendations", (req, res) => {
  MongoClient.find().then((result) => {
    res.send(result.rows);
  });
});

// app.get("/recommmendations", function (req, res) {
//   let response = res;

//   client.connect(
//     "mongodb://mongodb:docker@localhost:27017",
//     function (err, client) {
//       if (err) throw err;

//       db = client.db().findOne(query, function (err, result) {
//         if (err) throw err;
//         client.close();
//         response.send(result);
//       });
//     }
//   );
// });

/* ==================== Listener ==================== */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
