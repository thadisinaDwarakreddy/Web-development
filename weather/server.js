const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const city = req.body.cityInput;
  const apiKey = "bef0d21cbf7c1c8797e640a9c10e0f16";
  const unit = "metric";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;

      const imgurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      // res.send(
      //   "<h1>The temperature in Hyderabad is " + temp + " degree celcius</h1>"
      // );
      res.write(
        "<h1>The temperature in " +
          city +
          " is " +
          temp +
          " degree celcius</h1>"
      );
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<img src = " + imgurl + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
