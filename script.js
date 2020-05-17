var timeEl = document.querySelector(".time")
var secondsDisplay = 60;
var questionContainer=document.getElementById('question-container')
var shuffleQuestions, currentQuestionIndex
var startButton =document.getElementById('start-btn')
var questionEL= document.getElementById('question')
var answerEL = document.getElementById('answer-buttons')
var nextButton =document.getElementById('next-btn')
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 60;

//I click the start button
startButton.addEventListener("click", startGame)
nextButton.addEventListener('click',()=>)
//THEN a timer starts and I am presented with a question
startButton.addEventListener("click", startTimer)

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage("Time's up!");

//WHEN I answer a question
function startGame(){
  console.log("Started")
  startButton.classList.add('hide')
  shuffleQuestions =questions.sort('hide')
  currentQuestionIndex = 0
  questionContainer.classList.renove('hide')
  }
//THEN I am presented with another question
function setNextQuestion(){
  resetState
  showQuestion(shuffleQuestions[currentQuestionIndex])

}

function showQuestion(question){
  questionEL.innerText = question.question 
  question.answers.forEach(answer=>{
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')

    if (answer,correct)(
      button.dataset.correct =answer.correct
    )
    button.addEventListener('click', selectAnswer)
    answerEL.appendChild(button)
  })
}
function resetState(){
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
  
}
//WHEN I answer a question incorrectly
function selectAnswer(e){
  var selectedButton = e.target
  var correct =selectedButton.dataset.correct
  setStatusClass(document.body,correct)
  Array.from(answerButtonsElement.children).forEach(button=>{
    setStatusClass(button, button.datatset.correct)
  })
  if (shuffleQuestions.length > currentQuestionIndex + 1){
nextButton.classList.remove('hide')
}else {
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}
 function setStatusClass(element, correct){
   clearStatusClass(element)
   if (correct){
     element.classList.add('correct')
   } else{
     element.classList.add('wrong')
   }
 }
 function clearStatusClass(element){
   element.classList.remove('correct')
   element,classList.add("wrong'")
 }

var questions = [{
      question:(“What are variables?“,
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
      ]},
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
  }];

//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score


// $(".startBtn".on("click", function(event) {
//   event.preventDefault)
// })

]

;