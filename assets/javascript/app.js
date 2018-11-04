window.onload = function () {
  $("#start").on("click", timer.start);
};

time = 30;
var intervalId;
var correct = 0;
var incorrect = 0;
var userAnswers = [];

$("#timer").toggle(false);
$("#questions").toggle(false);

var timer = {

  countdown: function () {
    clearInterval();
    time--;
    $("#timer").text(time);

  
    if (time === 0) {
      clearInterval(intervalId);
      $("#questions").toggle(false);
      $("#timer").toggle(false);
      $("#introduction").text("Here are your results!");
      checkAnswers();
      $("#results").append("Correct:" + " " + correct);
      $("#results").append("<div> Incorrect:" + " " + incorrect + "</div>");
      console.log(checkAnswers());
  }},

  start: function () {
    if (time = 30) {
      intervalId = setInterval(timer.countdown, 1000);
      timerCountdown = true;
      $("#timer").toggle(true);
      $(".btn").toggle(false);
      $("#questions").toggle(true);
      $("#introduction").text("Good luck!");
    }
  }
};

  function checkAnswers() {

  var correctAnswers = [
    "1951",
    "desi",
    "conga",
    "red",
    "fredandethel",
  ];

  var valuesByName = document.getElementsByName('correct').values;
  console.log(valuesByName);

  if (userInput === "1951" || "desi" || "congo" || "red" || "fredandethel") {
    correct++;
  }
  else if (userInput === correctAnswers) {
    incorrect++;
    console.log(correctAnswer);
  }
};