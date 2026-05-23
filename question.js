// DOMANDE //
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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",

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

    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
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

// ELEMENTI HTML

const title = document.getElementById("questionText");

const answerDiv = document.getElementById("answers");

const questionNumber = document.getElementById("questionNumber");

const timerElement = document.getElementById("timer");

// VARIABILI QUIZ

let currentQuestion = 0;

let score = 0;

let timer;

let timeLeft = 30;

// CREAZIONE RISPOSTA


function addAnswer(textValue) {
  const answerDiv = document.getElementById("answers")
  const input = document.createElement("input")
  const label = document.createElement("label")



  label.innerText = textValue

  input.setAttribute("class", "answer-button")
  input.setAttribute("type", "radio")
  input.setAttribute("name", "ask")
  input.setAttribute("value", textValue)
  
  label.setAttribute("for", "answer-button")

  label.addEventListener("click", () => {
    selectAnswer(textValue);
  });


  answerDiv.appendChild(input)
  answerDiv.appendChild(label)


} 




/*function addAnswer(answer) {
  // CREO BOTTONE

  const button = document.createElement("button");

  // TESTO BOTTONE

  button.innerText = answer;

  // CLASSE CSS

  button.classList.add("answer-button");

  // EVENTO CLICK

  button.addEventListener("click", () => {
    selectAnswer(answer);
  });

  // AGGIUNGO BOTTONE

  answerDiv.appendChild(button);
} */

// MOSTRA DOMANDA

function showQuestion() {
  // FERMO TIMER PRECEDENTE

  clearInterval(timer);

  // CONTROLLO FINE QUIZ

  if (currentQuestion >= questions.length) {

    window.location.href =
      `results.html?score=${score}&total=${questions.length}`;

    return;
}

  // PRENDO DOMANDA ATTUALE

  const question = questions[currentQuestion];

  // MOSTRO TESTO DOMANDA

  title.innerText = question.question;

  // AGGIORNO NUMERO DOMANDA

  questionNumber.innerText = currentQuestion + 1;

  // PULISCO RISPOSTE PRECEDENTI

  answerDiv.innerHTML = "";

  // CREO ARRAY RISPOSTE

  let randomAnswers = [question.correct_answer, ...question.incorrect_answers];

  // RANDOM RISPOSTE

  randomAnswers.sort(() => {
    return Math.random() - 0.5;
  });

  // CREO BOTTONI

  for (let i = 0; i < randomAnswers.length; i++) {
    addAnswer(randomAnswers[i]);
  }

  // AVVIO TIMER
  

  startTimer();
}

// TIMER
const fullDashArray = 2 * Math.PI * 90; // Circonferenza (2 * π * raggio)
const timeLimit = 30


const pathElement = document.getElementById("timer-path");
const labelElement = document.getElementById("timer");

// Inizializza il cerchio
pathElement.setAttribute("stroke-dasharray", fullDashArray);

function formatTime(time) {
  return time; 
}

function setCircleDasharray(fraction) {
  const dashoffset = fullDashArray - (fraction * fullDashArray);
  pathElement.setAttribute("stroke-dashoffset", dashoffset);
}
function startTimer() {
  const timeFraction = timeLeft / timeLimit;
    setCircleDasharray(timeFraction);
  // RESET TEMPO

  timeLeft = 30;

  // STAMPO TIMER

  timerElement.innerText = timeLeft;

  // AVVIO TIMER

  timer = setInterval(() => {
    // DIMINUISCO TEMPO

    timeLeft--;
    labelElement.innerHTML = formatTime(timeLeft);
    const timeFraction = timeLeft / timeLimit;
    setCircleDasharray(timeFraction);

    // AGGIORNO HTML TIMER

    timerElement.innerText = timeLeft;
    

    // TEMPO FINITO

    if (timeLeft === 0) {
      // FERMO TIMER

      clearInterval(timer);

      // PASSO ALLA DOMANDA SUCCESSIVA

      currentQuestion++;

      // MOSTRO NUOVA DOMANDA

      showQuestion();
    }
  }, 1000);
}

// CONTROLLO RISPOSTA

function selectAnswer(answer) {
  // FERMO TIMER

  clearInterval(timer);

  // PRENDO DOMANDA ATTUALE

  const question = questions[currentQuestion];

  // CONTROLLO RISPOSTA

  if (answer === question.correct_answer) {
    score++;
  }

  // DOMANDA SUCCESSIVA

  currentQuestion++;

  // MOSTRO NUOVA DOMANDA

  showQuestion();
}

// AVVIO QUIZ

showQuestion();




///////////////////////////





/*
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft -= 1;
    
    
    // Calcola la frazione rimanente e aggiorna il cerchio
    const timeFraction = timeLeft / TIME_LIMIT;
    setCircleDasharray(timeFraction);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Tempo scaduto!");
    }
  }, 1000);
}*/

// Avvia il timer automaticamente


