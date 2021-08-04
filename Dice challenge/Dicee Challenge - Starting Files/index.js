// random number generation
var rand1 = Math.floor(Math.random() * 6) + 1;

var randimg1 = "dice" + rand1 + ".png";
var randimgs1 = "images/" + randimg1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randimgs1);

var rand2 = Math.floor(Math.random() * 6) + 1;

var randimg2 = "dice" + rand2 + ".png";
var randimgs2 = "images/" + randimg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randimgs2);

if (rand1 > rand2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (rand1 < rand2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
