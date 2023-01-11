const express = require("express");
const cors = require("cors");

const MongoClient = require("mongodb").MongoClient;
app.get("/get-profile", function (req, res) {
  let response = res;

  MongoClient.connect(
    "mongodb://mongodb:docker@localhost:27017",
    function (err, client) {
      if (err) throw err;

      db = client.db("users").findOne(query, function (err, result) {
        if (err) throw err;
        client.close();
        response.send(result);
      });
    }
  );
});
