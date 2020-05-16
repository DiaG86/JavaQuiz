
//I click the start button
var startButton = document.querySelector("#start")
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
//THEN a timer starts and I am presented with a question


//this launches the app by calling setTime() and renderTime()
getTimePreferences();

//These two functions are just for making sure the numbers look nice for the html elements
function getFormattedMinutes() {
  //
  var secondsLeft = totalSeconds - secondsElapsed;

  var minutesLeft = Math.floor(secondsLeft / 60);

  var formattedMinutes;

  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }

  return formattedMinutes;
}

function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

//questions and answers
//1)What are variables
//*NOUNS OF PROGRAMMING,ADJECTIVES OF PROGRAMMING,VERBS OF PROGRAMMING/PRONOUNS OF PROGRAMMING
//2)What is Java script for?
//STYLE WEBS DESIGN/CREATE BASIC WEB DESIGN/ *CREATE DYNAMIC WEB DESIGN/NONE OF THE ABOVE
//E)What command prints content to the debugger?
//*CONSOLE.LOG, CONFIRM,APPEND,SET ATTRIBUTE
//4)Which of these genreates T/F value?
//ALERTS/*CONFIRM/PROMPT/ELSE IF
//5) What is a variable that is a collection?
//*ARRAY/LOOP/FORM/COLOR

startButton.addEventListener("click", startTimer);