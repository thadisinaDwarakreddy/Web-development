buttonColours = ["yellow", "red", "blue", "green"];
gamePattern = [];
userClickedPattern = [];

var started = false;

var level = 0;

if (started === false) {
  $(document).on("keypress", function () {
    nextSequence();
    $("h1").text("Level " + level);
    started = true;
  });
}

$(".btn").click(function () {
  var userChoosenColur = $(this).attr("id");
  userClickedPattern.push(userChoosenColur);
  playSound(userChoosenColur);
  animatePress(userChoosenColur);
  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  userClickedPattern = [];

  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColour);

  $("#" + randomChoosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChoosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-Title").text("Game Over, Press Any Key to Restart");
    var wrong = new Audio("wrong.mp3");
    wrong.play();
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
