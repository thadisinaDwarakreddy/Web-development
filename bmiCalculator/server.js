const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var height = Number(req.body.Height);
  var weight = Number(req.body.Weight);

  var BMI = Math.round(weight / Math.pow(height, 2), 1);

  res.send("Your BMI is " + BMI);
});

app.listen(3000, function () {
  console.log("server is connected");
});
