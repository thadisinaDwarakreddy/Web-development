var numofdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numofdrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonhtml = this.innerHTML;
    makesound(buttonhtml);
    buttonAnime(buttonhtml);
  });
}

document.addEventListener("keydown", function (event) {
  makesound(event.key);
  buttonAnime(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
    case "S":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
    case "D":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
    case "J":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
    case "K":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
    case "L":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonhtml);
      break;
  }
}

function buttonAnime(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// var aud_name = "tom-" + i + ".mp3";
// var audio_w = new Audio("sounds/aud_name");
// audio_w.play();
