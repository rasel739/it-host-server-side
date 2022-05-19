const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//server home route

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// //route not found
// app.use((req, res, next) => {
//   res.status(404).json({ message: "Route Not Found!" });
// });

// //server error
// app.use((error, req, res, next) => {
//   res.status(500).json({ message: "Server Error" });
// });

module.exports = app;
