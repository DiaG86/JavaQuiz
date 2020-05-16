var timeEl = document.querySelector(".time")
var secondsDisplay = 60;
var questionContainer=document.getElementById('question-container')
var shuffleQuestions, currentQuestionIndex
var startButton =document.getElementById('start-btn')
//I click the start button
startButton.addEventListener("click", startGame)
startButton.addEventListener("click", startTimer)
function startGame(){
console.log("Started")
startButton.classList.add('hide')
}
//THEN a timer starts and I am presented with a question


//WHEN I answer a question
//THEN I am presented with another question
function setNextQuestion(){

}
//WHEN I answer a question incorrectly
function selectAnswer(){}

var questions = [
  {
      question: “What are variables?“,
      answers: [
          { text: “programming adjectives”, correct: false },
          { text: “programming verbs”, correct: false },
          { text: “programming nouns“, correct: true },
          { text: “programming pronouns”, correct: false }
      ]
  },
  {
      question: “What is Java script for?“,
      answers: [
          { text: “webpage styling”, correct: false },
          { text: “dynamic design”, correct: true },
          { text: “basic creation”, correct: false },
          { text: “none of the above”, correct: false }
      ]
  },
  {
      question: “which one is not a coding language?“,
      answers: [
          { text: “Coffee”, correct: true },
          { text: “Java”, correct: false },
          { text: “CSS”, correct: false },
          { text: “html”, correct: false }
      ]
  },
  {
      question: “Which is not a coffee brand?“,
      answers: [
          { text: “maxwell house”, correct: false },
          { text: “starbucks”, correct: false },
          { text: “dunkin”, correct: false },
          { text: “Olive garden”, correct: true }
      ]
  },
  {
      question: “why couldn’t the react component understand the joke?“,
      answers: [
          { text: “it didn’t get the context”, correct: true },
          { text: “it was too drunk to understand”, correct: false },
          { text: “it didn’t hear the joke”, correct: false },
          { text: “it didn’t know and didn’t care”, correct: false }
      ]
  }

//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score


$(".startBtn".on("click", function(event) {
  event.preventDefault)
})

]

;