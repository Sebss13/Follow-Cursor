const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
let currentQuestion ={};
let acceptingAnswers = false;
let score=0;
let questionCounter=0;
let availableQuestions=[];
let questions=[
    {
        question:'Ce afirmatie referitoare la celula este corecta?',
        choice1:'este unitatea morfologica si functionala a tuturor organismelor vii',
        choice2:'este unitatea de masura a tuturor organismelor vii',
        choice3:'celulele corpului uman sunt procariote',
        choice4:'masoara 2-3 microni',
        answer:1,
    },
    {
        question:'celula:',
        choice1:'este unitatea de baza,morfologica si functionala a animalelor',
        choice2:'celulele umane sunt procariote pentru ca se divid prin mitoza',
        choice3:'pot fi 2 tipuri: unicelulare si pluricelulare',
        choice4:'este unitatea de baza,morfologica si functionala a tuturor organismelor vii',
        answer:4,
    },
    {
        question:'citoplasma celulei:',
        choice1:'vascozitatea sa depinde de varsta celulei si de activitate',
        choice2:'contine organite,nucleul si membrana plasmatica',
        choice3:'este semilichida si protejeaza impotriva microorganismelor',
        choice4:'permite trecerea ionilor si a moleculelor hidrosolubile doatorita membranei semipermeabile',
        answer:1,
    },
    {
        question:'membrana plasmatica:',
        choice1:'este formata din 2 straturi bistratificate de fosfolipide si proteine',
        choice2:'prezinta canale pentru trecerea moleculelor de O2 si CO2 printre fosfolipide',
        choice3:'are un strat bistratificat de fosfolipide si proteine ce plutesc printre ele',
        choice4:'are structura de mozaic fluid pentru ca fosfolipidele plutesc libere fara sa rupa membrana',
        answer:3,
    },
    {
        question:'reticulul endoplasmatic neted:',
        choice1:'are rol in sinteza proteica',
        choice2:'are rol in sinteza lipidelor,a membranei si in depozitarea calciului',
        choice3:'este un ansamblu de membrane nonmembranoase ce permit transportul moleculelor',
        choice4:'deriva din sacii aparatului golgi si are rol in sinteza lipidelor',
        answer:2,
    },
    {
        question:'celulele:',
        choice1:'cele procariote nu au nucleu si organite, si se divid prin mitoza',
        choice2:'cele eucariote sunt bacteriile, nu prezinta nucleu',
        choice3:'au structura si functie similara',
        choice4:'cele eucariote au nucleu,organite si se divid prin mitoza',
        answer:4,
    },
    {
        question:'afirmatia corecta cu privire la ciclul celular:',
        choice1:'este impartit in interfaza si mitoza',
        choice2:'in profaza cromatina se spiralizeaza,nucleul dispare si ADN-ul se replica',
        choice3:'in metafaza cromozomii ajung in placa ecuatoriala',
        choice4:'citokineza reprezinta diviziunea a celor 2 celule diferite',
        answer:3,
    }
    /*,
    {
        question:'',
        choice1:'',
        choice2:'',
        choice3:'',
        choice4:'',
        answer:,
    }*/

    ]    
    

const CORRECT_BONUS=10;
const MAX_QUESTIONS=7;
startGame=()=>{
    questionCounter=0
    score=0
    availableQuestions=[...questions];
    
    getNewQuestion();
};
getNewQuestion=()=>{
    if(availableQuestions.length===0 || questionCounter>= MAX_QUESTIONS){
        questionCounter.innerHTML="0"
        question.innerHTML="Ai ajuns la "+ score + " puncte!"
        choices.innerHTML=" ";
        questionCounter.innerHTML=" "
        
        document.getElementById('next').addEventListener('click',()=>{
            setTimeout(()=>{
           return window.location.assign("../start page/index.html");
          },1000)
          })
    }
    questionCounter++;
    questionCounterText.innerHTML=questionCounter+"/" + MAX_QUESTIONS;

    const questionIndex= Math.floor(Math.random()*availableQuestions.length);
    currentQuestion=availableQuestions[questionIndex]
    question.innerHTML=currentQuestion.question;
    choices.forEach(choice=>{
        const number = choice.dataset['number'];
        choice.innerHTML=currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers=true
};

choices.forEach(choice=>{
    choice.addEventListener('click',e=>{
        if(!acceptingAnswers)return;
        acceptingAnswers=false;
        const selectedChoice=e.target
        const selectedAnswer=selectedChoice.dataset["number"];
        const classToApply=
        selectedAnswer==currentQuestion.answer ? "correct" : "incorrect";
            
        
       
        
        if(classToApply=== 'correct'){
            incrementScore(CORRECT_BONUS);
            
        }
        else{
            if(currentQuestion.answer==1){
                currentQuestion.answer="A";
            }
            if(currentQuestion.answer==2){
                currentQuestion.answer="B";
            }
            if(currentQuestion.answer==3){
                currentQuestion.answer="C";
            }
            if(currentQuestion.answer==4){
                currentQuestion.answer="D";
            }
            question.innerHTML="Raspunsul corect: "+currentQuestion.answer;
        }
    
        
           
    

        selectedChoice.parentElement.classList.add(classToApply);
        document.getElementById('next').addEventListener('click',()=>{
            setTimeout(()=>{
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion()
            },500)
        })
        
        
    })
})
incrementScore = num=>{
    score+=num
    scoreText.innerHTML=score;
}

startGame();