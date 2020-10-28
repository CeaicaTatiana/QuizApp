const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() { //what happens when we clink on Start button
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() { //what happens when we clink on Next button

}

function selectAnswer() { //what happens when we choose an answer

}
