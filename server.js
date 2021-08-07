const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("May Node be with you, listening on 3000");
});

// We normally abbreviate `request` to `req` and `response` to `res`.
// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

app.get("/", (req, res) => {
  //   res.send("Hello World");
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
});

app.post("/quotes", (req, res) => {
  console.log(req.body);
});

MongoClient.connect("mongodb-connection-string", (err, client) => {});
