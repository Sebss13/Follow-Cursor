let questions = [
  {
    question: 'Care sunt cele 4 sisteme ce contribuie in desfasurarea functiei de nutritie?',
    choices: [
      'Respirator,circulator,locomotor si digestiv', // are indexul 0 , dar e intrebarea 1
      'Excretor, respirator,circulator si digestiv',// are indexul 1, dar e intrebarea 2
      'Nervos, respirator, circulator si digestiv',// are indexul 2, dar e intrebarea 3
      'Muscular, respirator, digestiv si excretor',// are indexul 3, dar e intrebarea 4
    ],
    answer: 2,
  },
  {
    question: 'Ce sisteme asigura realizarea functiei locomotare?',
    choices: [
      'Sistem nervos si muscular',
      'Sistem nervos, muscular si osos',
      'Sistem muscular si osos',
      'Sistem nervos si circulator',
    ],
    answer: 3,
  },
  {
    question: 'Ce este anatomia?',
    choices: [

      'Stiinta ce se ocupa cu studiul functiilor anatomice',
      'Studiul functiilor structurilor corpului uman',
      'Studiul functiilor structurilor corpului uman',
      'Studiul functiilor structurilor corpului uman',
      'Studiul functiilor structurilor corpului uman',
      'Studiul functiilor structurilor corpului uman',
      'Studiul functiilor structurilor corpului uman',
      'Stiinta ce se ocupa cu studiul anemiei',
      'Studiul structurilor corpului uman si organizarea acestora'
    ],
    answer: 1,
  },
  {
    question: 'Ce reprezinta fiziologia?',
    choices: [

      'studiul functiilor structurilor corpului uman',
      'studiul fizioterapiei',
      'studiul structurilor corpului uman',
      'studiul functiilor si structurilor corpului uman'
    ], answer: 1,
  },
]


const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const choicesContainer = document.getElementById("choices-container");

let score = 0;
const CORRECT_BONUS = 10;

let acceptingAnswers = false;
let availableQuestions = [];
let currentQuestion = {};
let questionCounter = 0;


let max_questions = (questions.length < 10) ? questions.length : 10;
const MAX_QUESTIONS = max_questions;


const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let create_question_card = (text, index) => {
  let choicePrefix = document.createElement('p');
  choicePrefix.classList.add("choice-prefix");
  choicePrefix.textContent = alphabet[index];
  let choiceText = document.createElement('p');
  choiceText.classList.add("choice-text");
  choiceText.textContent = text;
  let choiceContainer = document.createElement('div');
  choiceContainer.classList.add("choice-container");
  choiceContainer.appendChild(choicePrefix);
  choiceContainer.appendChild(choiceText);


  // add events for this choice card
  choiceText.addEventListener('click', e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;

    classToApply = 'correct';
    if (currentQuestion.answer === (index + 1)) incrementScore(CORRECT_BONUS);
    else {
      question.textContent = `Raspunsul corect:  ${alphabet[currentQuestion.answer - 1]}`;
      classToApply = 'incorrect';
    }
    choiceText.parentElement.classList.add(classToApply);
  })

  return choiceContainer;
}

let restart_quiz = () => {
  // folosi template literal
  question.textContent = `Ai ajuns la  ${score} puncte!`;
  questionCounter.textContent = " ";

  document.getElementById("next").removeEventListener("click", getNewQuestion);
  document.getElementById('next').addEventListener("click", () => window.location.reload());

}
let getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) return restart_quiz();

  questionCounter++;
  choicesContainer.innerHTML = "";
  questionCounterText.innerHTML = `${questionCounter} / ${MAX_QUESTIONS}`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex]
  availableQuestions.splice(questionIndex, 1);

  question.innerHTML = currentQuestion.question;

  currentQuestion['choices'].forEach((choice, index) => choicesContainer.appendChild(create_question_card(choice, index)))
  acceptingAnswers = true;


};


let incrementScore = num => {
  score += num
  scoreText.innerHTML = score;
}

// daca pui un arrow function asa se va apela
let startGame = (() => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions];

  document.getElementById('next').addEventListener('click', getNewQuestion)
  getNewQuestion();
})();


