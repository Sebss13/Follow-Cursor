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
        question:'afirmatie adevarata cu privire la tesuturi:',
        choice1:'cel epitelial simplu cilindric nu este vascularizat si captuseste traheea',
        choice2:'membrana bazala este formata din fibre de colageni si glicoproteine',
        choice3:'uroteliu se mai numeste si tesut tranzitional si face parte din cel epitelial simplu stratificat',
        choice4:'cel epitelial lax sau aerolar se gaseste sub piele si contine fluid tisular',
        answer:2,
    },
    {
        question:'afirmatia adevarata cu privire la tesuturi:',
        choice1:'tesutul adipos este unul conjunctiv si prezinta fibre adipoase',
        choice2:'tesutul epitelial startificat cubic se gaseste pe suprafata ovarului si fata anterioara a cristalimului',
        choice3:'tesutul conjunctiv elastic se gaseste in corzile vocale si in peretii arterelor',
        choice4:'pielea este tesut epitelial stratificat pavimentos cheratinizat',
        answer:3,
    },
    {
        question:'afirmatia corecta cu privire la glande:',
        choice1:'glandele pot fi holocrine si apocrine',
        choice2:'glandele intestinale sunt de tip unicelular compus tubular',
        choice3:'glandele sebacee sunt apocrine pentru ca se dezintegreza',
        choice4:'glanda parotida este de tip compusa tubulo-acinoasa',
        answer:4,
    },
    {
        question:'tesutul conjunctiv lax:',
        choice1:'se gaseste sub epitelii si are fibre de colagen dispuse neordonat',
        choice2:'are fibre de reticulina, elastina si colagen ce sunt sintetizate de catre fibroblaste',
        choice3:'contine fluid tisular si in cadrul lui au loc procese de aparare imunitara',
        choice4:'se mai numeste aerolar si contine macrofage,limfocite,mastocite si fibroblaste',
        answer:4,
    },
    {
        question:'tesutul cartilaginos:',
        choice1:'hialin, cuprinde scheletul fetal, extremitatile oaselor lungi, traheea si laringele',
        choice2:'se regenereaza, datorita condroblastelor ce sintetizeaza fibrele de colagen',
        choice3:'fibros, este cel mai rezistent, fiind prezent in oase',
        choice4:'elastic, se afla in peretii arterelor si laringelui',
        answer: 2,
    },
    {
        question:'tesutul epitelial:',
        choice1:'simplu pavimentos, inveleste vasele de sange',
        choice2:'cartilaginos hialin, se afla in trahee si bronhii',
        choice3:'stratificat cubic, se afla in glandele sudoripare',
        choice4:'uroteriul isi modifica forma la extensie',
        answer:3,
    },
    {
        question:'Cartilajul',
        choice1:'Prezinta condroblaste si condroclaste',
        choice2:'Este hranit de membrana bazala subadiacenta',
        choice3:'Prezinta un miez gelatinos si absoarbe socurile',
        choice4:'Are fibre de colagen ce ii confera aspect fibros',
        answer:3,
    },
    {
        question:'Afirmatia corecta cu privire la glande:',
        choice1:'Celulele caliciforme se gasesc in tesutul epitelial simplu cilindric si secreta mucina',
        choice2:'Glandele tubulare simple sunt cele gastrice',
        choice3:'Glandele salivare secreta mucina, formata din polizaharide si proteine',
        choice4:'Glandele sebacee se dezintegreaza cu secretia, fiind numite apocrine',
        answer:1,
    },
    {
        question:'Glandele:',
        choice1:'se clasifica si dupa tipul de activitate in mucoase,seroase seromucoase',
        choice2:'seroase, secreta un material proteic apos si enzime',
        choice3:'ceruminoase, sunt merocrine pentru ca raman intacte cu secretia',
        choice4:'submandibulare sunt de tip tubulo acinoase',
        answer:2,
    },
    {
        question:'Glandele exocrine:',
        choice1:'sunt cele sudoripare, sebacee si gonadele',
        choice2:'sunt cele ceruminoase,sebacee, sudoripare si gonadele',
        choice3:'difera de cele endocrine prin ductul excretor si prin secretia enzimelor',
        choice4:'au secretie externa, cu canal de excretie in sange',
        answer:3,
    },
    {
        question:'Glandele endocrine:',
        choice1:'se mai numesc glande fara duct excretor sau cu secretie interna',
        choice2:'sunt hipofiza, epifiza si apocrine',
        choice3:'secreta hormoni intr-un duct excretor',
        choice4:'secreta hormoni direct in sange, printr-un canal',
        answer:1,
    },
    {
        question:'Glandele sudoripare sunt:',
        choice1:'exocrine, holocrine si de tip simplu tubular incolacite',
        choice2:'holocrine si apocrine,de tip tubular incolacit',
        choice3:'stimulati hormonal si la temperaturi scazute',
        choice4:'exocrine, de tip simplu tubular incolacit si se gasesc in piele',
        answer:4,
    },
    {
        question:'Glandele sebacee sunt:',
        choice1:'holocrine si secreta sebum, alcatuit din substante ionice si apa',
        choice2:'apocrine, cu secretie externa de tip compus acinos ramificate',
        choice3:'holocrine,cu secretie externa, de tip simplu acinos ramificat',
        choice4:'holocrine, se mai numescalveolare si secreta sebum, alcatuit din cheranocite moarte',
        answer:3,
    },
    {
        question:'Glandele submandibulare:',
        choice1:'sunt exocrine, mucoase si de tip simplu acinos',
        choice2:'sunt exocrine, seromucuoase de tip compus acinos',
        choice3:'sunt salivare, seromucoase si de tip compus tubulo acinos',
        choice4:'sunt glande pereche, exocrine si cu secretie direct in sange',
        answer:2,
    },
    {
        question:'Afirmatia corecta cu privire la tesuturi:',
        choice1:'tesutul epitelial dens se afla in tendoane, ligamente si muschi',
        choice2:'tesutul epitelial dens neordonat acopera oasele si cartilajele',
        choice3:'cel conjunctiv reticulat se afla in splina, rinichi si nodulii limfatici',
        choice4:'cel conjunctiv pigmentar contine cheranocite si se afla in structura ochiului',
        answer:3,
    },
    {
        question:'Tesutul:',
        choice1:'epitelial stratificat elastic se gaseste in corzile vocale si peretii arterelor',
        choice2:'epitelial pseudostratificat cilindric face parte din alcatuirea traheei',
        choice3:'conjunctiv propriu-zis dens ordonat acopera tendoanele, ligamentele si aponevrozele',
        choice4:'reticulat formeaza o retea de fibre de reticulina numita reticul',
        answer:2,
    },
    {
        question:'Glnadele:',
        choice1:'sunt de 2 feluri: apocrine si eccrine',
        choice2:'sunt formate din tesut epitelial glandular si pot fi exocrine, endocrine si mixte',
        choice3:'salivare sunt: submandibulare, sublinguale si paratiroida',
        choice4:'unicelulare secreta mucus, format din enzime si polizaharide',
        answer:2,
    },
    {
        question:'Tesutul:',
        choice1:'conjunctiv elastic, este format din fibre ramificate de elastina si fibroblaste',
        choice2:'conjunctiv adipos, are putine fibre si citoplasma clara, fara nucleu',
        choice3:'conjunctiv dens are fibre de reticulina, de colagen, elastina si fibroblaste',
        choice4:'conjunctiv nu permite trecerea substanelor',
        answer:1,
    },
    {
        question:'Tesutul conjunctiv:',
        choice1:'poate fi propriu-zis, cartilaginos, osos si fluid',
        choice2:'prezinta membrana bazala formata din proteoglicani si fibre de colagen',
        choice3:'are substanta fundamentala moale, dura sau lichida',
        choice4:'este vascularizat, si prezinta condroblaste',
        answer:3,
    },
    {
        question:'Afirmatia adevarata:',
        choice1:'tesutul epitelial este vascularizat si are membrana bazala fomata din fibre de colagen si glicoproteine',
        choice2:'condroblastee sunt celule gasite in cartilaj si secreta fibre de reticulina',
        choice3:'fibroblastele sunt celule ce sintetizeaza fibrele de colagen din tesutul conjunctiv',
        choice4:'tesutul elastic adipos se gaseste in spatele globului ocular',
        answer:1,
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
const MAX_QUESTIONS=6;
startGame=()=>{
    questionCounter=0
    score=0
    availableQuestions=[...questions];
    
    getNewQuestion();
};
getNewQuestion=()=>{
    if(availableQuestions.length===0 || questionCounter>= MAX_QUESTIONS){
        question.innerHTML="Ai ajuns la "+ score + " puncte!"
        choices.innerHTML=" ";
        questionCounter.innerHTML=" "
        
        document.getElementById('next').addEventListener('click',()=>{
            setTimeout(()=>{
           return window.location.assign("../index.html");
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