// le-am mutat aici sus ca nu voiam sa dau scroll deasupra lor mereu
let questions = [
  {
    question: 'Care sunt cele 4 sisteme ce contribuie in desfasurarea functiei de nutritie?',
    choice1: 'Respirator,circulator,locomotor si digestiv',
    choice2: 'Excretor, respirator,circulator si digestiv',
    choice3: 'Nervos, respirator, circulator si digestiv',
    choice4: 'Muscular, respirator, digestiv si excretor',
    answer: 2,
  },
  {
    question: 'Ce sisteme asigura realizarea functiei locomotare?',
    choice1: 'Sistem nervos si muscular',
    choice2: 'Sistem nervos, muscular si osos',
    choice3: 'Sistem muscular si osos',
    choice4: 'Sistem nervos si circulator',
    answer: 3,
  },
  {
    question: 'Ce este anatomia?',
    choice1: 'Stiinta ce se ocupa cu studiul functiilor anatomice',
    choice2: 'Studiul functiilor structurilor corpului uman',
    choice3: 'Stiinta ce se ocupa cu studiul anemiei',
    choice4: 'Studiul structurilor corpului uman si organizarea acestora',
    answer: 4,
  },
  {
    question: 'Ce reprezinta fiziologia?',
    choice1: 'studiul functiilor structurilor corpului uman',
    choice2: 'studiul fizioterapiei',
    choice3: 'studiul structurilor corpului uman',
    choice4: 'studiul functiilor si structurilor corpului uman',
    answer: 1,
  },
  {
    question: 'Cu ce se ocupa citologia?',
    choice1: 'studiul celulelor corpului uman si functiile acestora',
    choice2: 'studiul tesuturilor, celulelor si organelor corpului uman la microscop',
    choice3: 'se mai numeste si histologie si se ocupa cu studiul celulelor corpului uman',
    choice4: 'studiul componentelor corpului uman la microscop',
    answer: 1,
  },
  {
    question: 'care este cel mai simplu nivel de organizare?',
    choice1: 'Celula',
    choice2: 'Anatomic',
    choice3: 'Atom',
    choice4: 'Molecula',
    answer: 3,
  },
  {
    question: 'Ce afirmatie referitoare la celula este corecta?',
    choice1: 'este unitatea morfologica si functionala a tuturor organismelor vii',
    choice2: 'este unitatea de masura a tuturor organismelor vii',
    choice3: 'celulele corpului uman sunt procariote',
    choice4: 'masoara 2-3 microni',
    answer: 1,
  },
  {
    question: 'care este nivelul final de organizare structurala?',
    choice1: 'organismul',
    choice2: 'corpul uman',
    choice3: 'scheletul',
    choice4: 'sistem de organe',
    answer: 4,
  },
  {
    question: 'metabolismul:',
    choice1: 'reprezinta suma proceselor chimice ce mentin organismul in limita parametrilor normali',
    choice2: 'este acumularea de materie din corp si mediu inconjurator',
    choice3: 'reprezinta suma tuturor proceselor chimice din organismul uman',
    choice4: 'toate cele anterioare',
    answer: 3,
  },
  {
    question: 'conductibilitatea:',
    choice1: 'se refera la proprietatea tuturor celulelor de a raspunde la stimuli',
    choice2: 'se refera la proprietatea unor celule de a raspunde la stimuli',
    choice3: 'este prezenta doar la celulele nervoase si cele musculare',
    choice4: 'sisteme de autoreglare prin care organismul produce un raspuns',
    answer: 3,
  },
  {
    question: 'afirmatia corecta privind reproducerea sunt:',
    choice1: 'este de 2 feluri: pluricelulara si unicelulara',
    choice2: 'poate fi dintre un ou fecundat si spermatoizi,numita asexuata',
    choice3: 'are rol in procesele de reparatie,crestere si inlocuire a celulelor,fiind numita sexuata',
    choice4: 'poate fi sexuata si asexuata',
    answer: 4,
  },
  {
    question: 'cand se afla organismul in homeostazie?',
    choice1: 'cand nevoile celulelor sunt satisfacute si organismul se afla in limitele normale',
    choice2: 'pierderea in cantitati mari a sangelui',
    choice3: 'atunci cand suma tuturor proceselor chimice din organism este constanta ',
    choice4: 'atunci cand organsimul primeste informatii din mediul inconjurator si stabileste un raspuns',
    answer: 1,
  },
  {
    question: 'cum se mentine organismul in homeostazie? ',
    choice1: 'prin mecanisme de autoreglare,reprezentand mijlocul principal',
    choice2: 'prin mecanisme de feedback:negativ si pozitiv',
    choice3: 'prin reglarea anabolismului si catabolismului',
    choice4: 'prin schimbul de materie si energie dintre corp si mediu inconjurator',
    answer: 2,
  },
  {
    question: 'cate cavitati are cavitatea toracica?',
    choice1: '2 cavitati: pleurala si pericardica',
    choice2: '2 cavitati: anterioara si posterioara',
    choice3: '3 cavitati: 2 pleurale si una pericardica',
    choice4: '6 regiuni',
    answer: 3,
  },
  {
    question: 'planul frontal:',
    choice1: 'se mai numeste longitudinal',
    choice2: 'imparte corpul in ventral si dorsal',
    choice3: 'separa corpul in anterior si ventral',
    choice4: 'se mai numeste coronar',
    answer: 2,
  },
  {
    question: 'cavitatea abdomino pelvina:',
    choice1: 'are 6 regiuni si se mai numeste cavitate peritoneala',
    choice2: 'se imparte in cavitate posterioara si anterioara',
    choice3: 'este separata de cavitatea toracica de regiunea epigastrica si hipocondru',
    choice4: 'se mai numeste cavitate peritoneala si are 9 regiuni',
    answer: 4,
  },
  {
    question: 'ce organe se afla in mediastin?',
    choice1: 'timus,esofag,trahee,bronhii si vase de sange',
    choice2: 'laringe,esofag,timus si rinchi',
    choice3: 'plamani,inima,timus si esofag',
    choice4: 'inima,timus,esofag,trahee,bronhii',
    answer: 4,
  },
  {
    question: 'ce organe se afla in hipocondrul drept?',
    choice1: 'ficat,rinichi,plaman si coada pancreasului',
    choice2: 'ficat,stomac,vezica biliara si splina',
    choice3: 'ficat,rinichi si capul pancreasului',
    choice4: 'ficat, stomac, bila si colonul ascendent',
    answer: 3,
  },
  {
    question: 'membranele seroase:',
    choice1: 'sunt 4: pericard,pleura,peritoneu si endocard',
    choice2: 'au 2 foite: una parietala si una viscerala',
    choice3: 'secreta ser, cu rol lubrifiant',
    choice4: 'acopera organele, cu rol lubrifiant',
    answer: 2,
  },
  {
    question: 'diafragma:',
    choice1: 'este o membrana ce separa cavitatea toracica de cea abdominala',
    choice2: 'este un muschi gasit in cavitatea toracica',
    choice3: 'este un muschi cu orificii, ce separa cavitatea toracica de cea abdominala',
    choice4: 'este muschi cu rol in respiratie si digestie',
    answer: 3,
  },
  {
    question: 'cavitatea posterioara:',
    choice1: 'este formata din cavitatea ventrala si cea dorsala',
    choice2: 'in ea se afla maduva spinarii,encefalul si rinichii',
    choice3: 'se mai numeste si ventrala',
    choice4: 'este formata din canal rahidian si cavitatea craniana',
    answer: 4,
  },
]

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let score = 0;
const CORRECT_BONUS = 10;

let acceptingAnswers = false;
let availableQuestions = [];
let currentQuestion = {};
let questionCounter = 0;
const MAX_QUESTIONS = 10;


let restart_quiz = () => {
  // folosi template literal
  question.innerHTML = `Ai ajuns la  ${score} puncte!`;
  choices.innerHTML = " ";
  questionCounter.innerHTML = " ";

  document.getElementById('next').addEventListener('click', () => {
    // poti omite return ci va returna statementul dupa '=>' automat
    setTimeout(() => window.location.assign("../start page/index.html"), 1000)
  })
}
let getNewQuestion = () => {
  console.log("Hello");

  // am extras-o intr-o functie noua
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) restart_quiz();

  questionCounter++;
  // template literal din nou ca e fain
  questionCounterText.innerHTML = `${questionCounter} / ${MAX_QUESTIONS}`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex]
  // punem splice-ul aici sa fie aproape
  availableQuestions.splice(questionIndex, 1);

  console.log("Hello")
  question.innerHTML = currentQuestion.question;
  // scaparam de acolade ca avem doar un statement
  choices.forEach(choice =>
    // nu avem nevoie de variabila asta : o punem direct 
    choice.innerHTML = currentQuestion[`choice${choice.dataset['number']}`] // ah, da, template literal
  )
  acceptingAnswers = true
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;

    // n-avem nevoie de e.target ca e.target e parametrul: choice
    const classToApply =
      choice.dataset["number"] == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === 'correct') incrementScore(CORRECT_BONUS);
    else {
      // poti omite '{}' daca ai doar un statement
      // if (currentQuestion.answer == 1) currentQuestion.answer = "A";
      // if (currentQuestion.answer == 2) {
      //   currentQuestion.answer = "B";
      // }
      // if (currentQuestion.answer == 3) {
      //   currentQuestion.answer = "C";
      // }
      // if (currentQuestion.answer == 4) {
      //   currentQuestion.answer = "D";
      // }

      let converter = "ABCD"; // stringul este un array de charuri
      // -1 ca primul index in array este 0 
      question.innerHTML = `Raspunsul corect:  ${converter[currentQuestion.answer - 1]}`;
    }

    choice.parentElement.classList.add(classToApply);
    document.getElementById('next').addEventListener('click', () => {
      setTimeout(() => {
        choice.parentElement.classList.remove(classToApply);
        getNewQuestion()
      }, 500)
    })

  })
})
let incrementScore = num => {
  score += num
  scoreText.innerHTML = score;
}

// daca pui un arrow function asa se va apela
let startGame = (() => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions];

  getNewQuestion();
})();


