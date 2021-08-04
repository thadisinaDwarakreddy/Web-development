//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", function (req, res) {
  res.send("contact me : dwarak@gmail");
});

app.get("/about", function (req, res) {
  res.send("mech");
});

app.get("/hobbies", function (req, res) {
  res.send("gamer");
});

app.listen(3000, function () {
  console.log("server has started");
});
