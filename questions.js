/* 

- mostrare domanda 1  FATTO
- mostrare 4 risposte in modo randomico  FATTO
- click 
- controllare se la domanda è giusta 
- contare le risposte giuste 
- ricordare la risposta data 
-  passare alla domanda  successiva 
- se utente non clicca dopo 30s skippare alla domanda successiva FATTO
- ripetere per tutte le domande FATTO
- all'ultima domanda caricare ultima pagina html 



metodo sort utile per randomizzare e con math.random per l'ordine delle domande
*/


const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];


let currentQuestion = 0
let timerID
let userAnswers = []

function showQuestion() {
  document.getElementById("questionText").innerText = questions[currentQuestion].question
  document.getElementById("questionNumber").innerText = currentQuestion + 1
  document.getElementById("answers").innerHTML = ""
const allAnswers = questions[currentQuestion].incorrect_answers.concat(questions[currentQuestion].correct_answer)
allAnswers.sort(() => Math.random() - 0.5)

for (let x = 0; x < allAnswers.length; x++) {
  addAnswer(allAnswers[x])
}

timerID = setInterval(nextQuestion, 5000)

}

function nextQuestion() {
  clearInterval(timerID)
  currentQuestion++
  if (currentQuestion < questions.length) {
    showQuestion()
  } else {
    showResults()
  }
}


showQuestion()

function addAnswer(text) {
  const answerDiv = document.getElementById("answers")
  const input = document.createElement("input")
  const label = document.createElement("label")

  input.setAttribute("type", "radio")
  input.setAttribute("name", "ask")
  input.setAttribute("value", text)

  label.innerText = text

  answerDiv.appendChild(input)
  answerDiv.appendChild(label)
  input.addEventListener("click", nextQuestion)

}




