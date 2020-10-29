const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() { //what happens when we clink on Start button
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() { //what happens when we clink on Next button
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer() { //what happens when we choose an answer

}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
  question: 'Who was Russian writer?',
  answers: [
    { text: 'Pushkin', correct: true },
    { text: 'Esenin', correct: true },
    { text: 'Bulgakov', correct: true },
    { text: 'Tolstoi', correct: true }
  ]
},
{
  question: 'Is it cold in Russia?',
  answers: [
    { text: 'Kinda', correct: false },
    { text: 'YES!!!', correct: true },
    { text: 'Um no', correct: false },
    { text: 'IDK', correct: false }
  ]
},
{
  question: 'What is 4 * 2?',
  answers: [
    { text: '6', correct: false },
    { text: '8', correct: true }
  ]
}
]
