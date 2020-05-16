
//I click the start button
var startButton = document.querySelector("#start")

//THEN a timer starts and I am presented with a question
//this launches the app by calling setTime() and renderTime()
getTimePreferences();

//These two functions are just for making sure the numbers look nice for the html elements
function getFormattedMinutes() {
  //
  var secondsLeft = totalSeconds - secondsElapsed;

  var minutesLeft = Math.floor(secondsLeft / 60);

  var formattedMinutes;
  minutesLeft.textContent = secondsLeft + "minutes remaining";
  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }

  return formattedMinutes;
}

//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

startButton.addEventListener("click", startTimer);