

/*let question= document.getElementById('quest')
let var1= document.getElementById('var1')
let var2= document.getElementById('var2')
let var3= document.getElementById('var3')
let var4= document.getElementById('var4')
let button= document.getElementsByTagName('button')
question.innerHTML="Care din urmatoarele afirmatii despre piele este adevarata?"
var1.innerHTML="pielea reprezinta aproximativ 35% din greutatea totala a corpului"
var2.innerHTML="pielea are functie suport pentru alte organe"
var3.innerHTML="pielea este cel mai mare organ"
var4.innerHTML="pielea nu prezinta pigmenti"
document.getElementById('main').style.backgroundColor="black";
    function check1(){
       
            document.getElementById('main').style.backgroundColor="red";
    
    }

    function check2(){
        
            document.getElementById('main').style.backgroundColor="red";
        
        }

    function check3(){
        
            document.getElementById('main').style.backgroundColor="green";
           next2();

}


    function check4(){
        
            document.getElementById('main').style.backgroundColor="red";
            
            }
 
            
     function next2(){
        document.getElementById('main').style.backgroundColor="black";
        question.innerHTML="Cheratina"
        question.remove;
        var1.innerHTML="impiedica patrunderea microogranismelor"
        var2.innerHTML="este o bariera impotriva ionilor si a sarurilor"
        var3.innerHTML="formeaza o bariera impotriva subsantelor hidrosolubile"
        var4.innerHTML="este un pigment"
              function check1(){
            
                  document.getElementById('main').style.backgroundColor="red";
                  
        
          }
          
            function check2(){
           
                document.getElementById('main').style.backgroundColor="red";
            
            }
    
             function check3(){
            
                document.getElementById('main').style.backgroundColor="green";
                next3();
         
            }
    
    
              function check4(){
           
                document.getElementById('main').style.backgroundColor="red";
               
                }
     }   
    function next3(){
        question.remove;

    }

/*let variants=document.getElementById('var');
let var1=document.getElementsByClassName('.var1')
let var2=document.getElementsByClassName('var2')
let var3=document.getElementsByClassName('var3')
let var4=document.getElementsByClassName('var4')
let question=document.getElementById('quest')

var a=1;
let answers={
    1:'c',
    2:'c',
    3:'c'
}
let variantss={
    1:'a',
    2:'b',
    3:'c',
    4:'d'
}
let questionss={
    1:"are u gay",
    2:"hea",
    3:"asd"
}
var1.addEventListener('click',()=>{
    
    console.log("se tenso")
})
var2.addEventListener('click',()=>{
    console.log("se tenso")
})
var3.addEventListener('click',()=>{
if(questionss.value==questionss[3]){
    console.log("se tenso")
}
})
var4.addEventListener('click',()=>{
    console.log("se tenso")
})*/
const question = document.querySelector('#question')
const choices= Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion={}
let acceptingAnswers=true
let score=0
let questionCounter=0
let availableQuestions=[]
let questions=[
    {
        question:'Care sunt cele 4 sisteme ce contribuie in desfasurarea functiei de nutritie?',
        choice1:'Respirator,circurator,locomotor si digestiv',
        choice2:'Excretor, respirator,circulator si digestiv',
        choice3:'Nervos, respirator, circulator si digestiv',
        choice4:'Muscular, respirator, digestiv si excretor',
        answer:1,
    },
    {
        question:'Ce sisteme asigura realizarea functiei locomotare?',
        choice1:'Sistem nervos si muscular',
        choice2:'Sistem nervos, muscular si osos',
        choice3:'Sistem muscular si osos',
        choice4:'Sistem nervos si circulator',
        answer:1,
    },
    {
        question:'Ce este anatomia?',
        choice1:'Stiinta ce se ocupa cu studiul functiilor anatomice',
        choice2:'Studiul functiilor structurilor corpului uman',
        choice3:'Stiinta ce se ocupa cu studiul anemiei',
        choice4:'Studiul structurilor corpului uman si organizarea acestora',
        answer:4,
    },
    {
        question:'Ce reprezinta fiziologia?',
        choice1:'studiul functiilor structurilor corpului uman',
        choice2:'studiul fizioterapiei',
        choice3:'studiul structurilor corpului uman',
        choice4:'studiul functilor si structurilor corpului uman',
        answer:1,
    },
    {
        question:'Cu ce se ocupa citologia?',
        choice1:'studiul celulelor corpului uman',
        choice2:'studiul tesuturilor, celulelor si organelor corpului uman la microscop',
        choice3:'se mai numeste si histologie si se ocupa cu studiul celulelor corpului uman',
        choice4:'studiul componentelor corpului uman la microscop',
        answer:1,
    },
    {
        question:'care este cel mai simplu nivel de organizare?',
        choice1:'Celula',
        choice2:'Anatomic',
        choice3:'Atom',
        choice4:'Molecula',
        answer:3,
    },
    {
        question:'Ce afirmatie referitoare la celula este corecta?',
        choice1:'este unitatea morfologica si functionala a tuturor organismelor vii',
        choice2:'este unitatea de masura a tuturor organismelor vii',
        choice3:'celulele corpului uman sunt procariote',
        choice4:'masoara 2-3 microni',
        answer:1,
    },
    {
        question:'care este nivelul final de organizare structurala?',
        choice1:'organismul',
        choice2:'corpul uman',
        choice3:'scheletul',
        choice4:'sistem de organe',
        answer:4,
    },
    {
        question:'metabolismul:',
        choice1:'reprezinta suma proceselor chimice ce mentin organismul in limita parametrilor normali',
        choice2:'este acumularea de materie din corp si mediu inconjurator',
        choice3:'reprezinta suma tuturor proceselor chimice din organismul uman',
        choice4:'toate cele anterioare',
        answer:3,
    },
    {
        question:'conductibilitatea:',
        choice1:'se refera la proprietatea unor celule de a raspunde la stimuli',
        choice2:'se refera la proprietatea unor celule de a raspunde la stimuli',
        choice3:'este prezenta doar celulele nervoase si cele musculare',
        choice4:'sisteme de autoreglare prin care organismul produce un raspuns',
        answer:3,
    },
    {
        question:'afirmatiile corecte privind reproducerea sunt:',
        choice1:'este de 2 feluri: pluricelulara si unicelulara',
        choice2:'poate fi dintre un ou fecundat si spermatoizi,numita asexuata',
        choice3:'are rol in procesele de reparatie,crestere si inlocuire a celulelor,fiind numita sexuata',
        choice4:'poate fi sexuata si asexuata',
        answer:4,
    },
    {
        question:'cand se afla organismul in homeostazie?',
        choice1:'cand nevoile celulelor sunt satisfacute si organismul se afla in limitele normale',
        choice2:'pierderea in cantitati mari a sangelui',
        choice3:'atunci cand suma tuturor proceselor chimice din organism este constanta ',
        choice4:'atunci cand organsimul primeste informatii din mediul inconjurator si stabileste un raspuns',
        answer:1,
    },
    {
        question:'cum se mentine organismul in homeostazie? ',
        choice1:'prin mecanisme de autoreglare,reprezentand mijlocul principal',
        choice2:'prin mecanisme de feedback:negativ si pozitiv',
        choice3:'prin reglarea anabolismului si catabolismului',
        choice4:'prin schimbul de materie si energie dintre corp si mediu inconjurator',
        answer:2,
    },
    {
        question:'cate cavitati are cavitatea toracica?',
        choice1:'2 cavitati: pleurala si pericardica',
        choice2:'2 cavitati: anterioara si posterioara',
        choice3:'3 cavitati: 2 pleurale si una pericardica',
        choice4:'6 regiuni',
        answer:3,
    },
    {
        question:'planul frontal:',
        choice1:'se mai numeste longitudinal',
        choice2:'se mai numeste coronal',
        choice3:'separa corpul in anterior si ventral',
        choice4:'separa corpul in caudal si cranial',
        answer:2,
    },
    {
        question:'cavitatea abdomino pelvina:',
        choice1:'are 6 regiuni si se mai numeste cavitate peritoneala',
        choice2:'se imparte in cavitate posterioara si anterioara',
        choice3:'este separata de cavitatea toracica de regiunea epigastrica si hipocondru',
        choice4:'se mai numeste cavitate peritoneala',
        answer:4,
    },
    {
        question:'ce organe se afla in mediastin?',
        choice1:'timus,esofag,trahee,bronhii si vase de sange',
        choice2:'laringe,esofag,timus si rinchi',
        choice3:'plamani,inima,timus si esofag',
        choice4:'inima,timus,esofag,trahee,bronhii',
        answer:4,
    },
    {
        question:'ce organe se afla in hipocondrul drept?',
        choice1:'ficat,rinichi,plaman si coada pancreasului',
        choice2:'ficat,stomac,vezica biliara si splina',
        choice3:'ficat,rinichi,capul pancreasului si vezica biliara',
        choice4:'ficat, stomac, bila si colonul ascendent',
        answer:3,
    },
    {
        question:'foitele pleurei:',
        choice1:'au o foita parietala ce inveleste cavitatea si una viscerala ce captuseste organele',
        choice2:'au rol lubrifiant si permit organelor sa alunece',
        choice3:'protejeaza organele cavitatii abdominale',
        choice4:'contine lichid sinovial cu rol lubrifiant',
        answer:2,
    }
]
const SCORE_POINTS=10
const MAX_QUESTIONS = 13
startGame= () => {
    questionCounter=0
    score=0
    availableQuestions= [...questions]
    getNewQuestion()
}
function getNewQuestion(){
    if(availableQuestions.lenght===0 || questionCounter>MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score)
        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText='Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width='${questionCounter/MAX_QUESTIONS}=100}%'
    const questionsIndex=Math.floor(Math.random()*availableQuestions.lenght)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice=>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+number]
    })
    availableQuestions.splice(questionsIndex,1)

    acceptingAnswers=true
}
choices.forEach(choice=>{
    choice.addEventListener('click',e=>{
        if(!acceptingAnswers)return
        acceptingAnswers=false
        const selectedChoice=e.target
        const selectedAnswer=selectedChoice.dataset['number']

        let classToApply= selectedAnswer==currentQuestion.answer?'correct':'incorrect'

        if(classToApply==='correct'){
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        },1000)

    })
})

incrementScore=num=>{
    score+=num
    scoreText.innerText=score
}
startGame()